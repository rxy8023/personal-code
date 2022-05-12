Array.prototype.every = function (callbackfn, args) {
  if (typeof callbackfn !== 'function') {
    throw new Error('callbackfn is not a function')
  }
  const O = Object(this)
  let len = O.length >>> 0
  let k = 0
  while (k < len) {
    if (k in O) {
      kValue = O[k]
      // 传入 this, 当前元素 element, 索引 index, 原数组对象 O
      let res = callbackfn.call(args, kValue, k, O)
      if (!res) {
        return false
      }
    }
    k ++
  }
  return true
}

const res = [1,2,3].every((v) => {
  return v > 0
})
console.log(res)
