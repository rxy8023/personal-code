const fs = require("fs")
const path = require("path")
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const babel = require("@babel/core")
const resolve = require("resolve").sync
const Command = require('commander').Command
const program = new Command()
program
  .version('1.0.0')
  .parse(process.argv)

// Golbal ID
let ID = 0
function createModuleInfo (filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  // 对源代码进行 AST 产出
  const ast = parser.parse(content, {
    sourceType: 'module'
  })
  // 依赖列表
  const deps = []
  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      deps.push(node.source.value)
    }
  })
  const id = ID++
  const { code } = babel.transformFromAstSync(ast, null, {
    presets: ["@babel/preset-env"]
  })
  return {
    id,
    code,
    filePath,
    deps
  }
}

// 生成依赖图
function createDependencyGraph(entry) {
  const moduleInfo = createModuleInfo(entry)
  const graphArr = []
  graphArr.push(moduleInfo)
  for (const module of graphArr) {
    module.map = {}
    module.deps.forEach(depPath => {
      const baseDir = path.dirname(module.filePath)
      const moduleDepPath = resolve(depPath, { baseDir })
      const moduleInfo = createModuleInfo(moduleDepPath)
      graphArr.push(moduleInfo)
      module.map[depPath] = moduleInfo.id
    })
  }
  return graphArr
}

function pack (entry) {
  const graph = createDependencyGraph(entry)
  const moduleArgArr = graph.map(module => {
    return `${module.id}: {
      factory: (exports, require) => {
        ${module.code}
      },
      map: ${JSON.stringify(module.map)}
    }`
  })
  const iifeBundler = `(function(modules) {
    const require = id => {
      const {factory, map} = modules[id]
      const localRequire = requireDeclarationName => require(map[requireDeclarationName])
      const module = {exports: {}}
      factory(module.exports, localRequire )
      return module.exports
    }
    require(0)
  })({${moduleArgArr.join()}})
  `
  return iifeBundler
}

let result = pack(program.args[0])
fs.writeFileSync(program.args[1], result)
