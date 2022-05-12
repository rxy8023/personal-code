Promise.prototype.all = function (promises) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(promises)) {
      throw new Error('must be Array')
    }
    let count = 0
    let arr = []
    for(let i =0;i < promises.length;i++) {
      promises[i].then(res => {
        arr[i] = res
        count++
        if (count === promises.length) resolve(arr)
      }, err => reject(err))
    }
  })
}

let promise1 = new Promise(reslove => reslove('promise111'))
let promise2 = new Promise(reslove => reslove('promise222'))
let promise3 = new Promise(reslove => reslove('promise333'))
Promise.all([promise1, promise2, promise3]).then(res => {
  console.log(res)
})
