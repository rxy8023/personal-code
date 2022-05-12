// 实现一个简单的字符串替换 render(template, context) 函数
var obj = {name: "666",age:"15"}
var str = "{{name}}很厉害，才{{age}}岁"
const render = (template, context) => {
  let result = template
  Object.keys(context).forEach((k)=> {
    console.log(k, context[k])
    const reg = new RegExp(`{{${k}}}`,'g')
    result = result.replace(reg, context[k]);
  })
  return result
}
const renderNew = (template, context) => {
  const reg = new RegExp(/\{\{(.*?)\}\}/,'g')
  return template.replace(reg, (match, key) => context[key])
}
const res = renderNew(str, obj)
console.log(res)
