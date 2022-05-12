const rewriteNew = (fn, ...args) => {
  if(typeof fn !== 'function'){
    throw new Error('newOperator function the first param must be a function')
  }
  // 创建一个空对象，空对象的__proto__属性指向构造函数的原型对象
  let obj = Object.create(fn.prototype)
  // 把上面创建的空对象赋值构造函数内部的this，用构造函数内部的方法修改空对象
  const ret = fn.apply(obj, args)
  // 如果构造函数返回一个对象，则返回这个值，否则返回上面创建的对象
  return ret instanceof Object ? ret : obj
}

let Test = function(name) {
  this.name = name
  return {a: 123}
}
let newObj = rewriteNew(Test, {
  a: 1
})
console.log(newObj)
