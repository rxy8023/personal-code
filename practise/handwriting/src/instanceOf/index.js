// 用途判断一个对象是否是一个函数的实例
const instanceofNew = (left, right) => {
  // 不断地递归向上查找原型链
  left = left.__proto__
  right = right.prototype
  while (true) {
    //  Object.prototype.__proto__ === null，构造函数
    if (left === null) return false
    if (left === right) return true
    left = left.__proto__
  }
}

function C(){}
function D(){}
var o = new C();

console.log(instanceofNew(o, C)) // true，因为 Object.getPrototypeOf(o) === C.prototype
console.log(instanceofNew(o, D)) //false
