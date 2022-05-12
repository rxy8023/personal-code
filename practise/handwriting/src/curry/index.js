// 手写一个curry函数
const curry = (func, ...args) =>{
  args.length >= func.length ?
    func(...args) :
  (..._args) => curry(func, ...args, ..._args)
}


function add(x, y, z) {
  return x + y + z;
}
var curriedAdd = curry(add);
console.log(curriedAdd(2)(3)(4)); // 9

// 无限层级版本
function _add(...args) {
  let sum = args.reduce((target, v) => target + v, 0)
  function s(...sArgs) {
    sum = sArgs.reduce((target, v) => target + v, sum)
    return s
  }
  s.toString = function() {
    return sum;
  }
  return s
}
