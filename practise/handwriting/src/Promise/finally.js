// 实现一个Promise.finally
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    // resolve callback 是因为callback如果是个异步操作，返回promise呢.希望等callback执行完再接着执行
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

let testPromise = new Promise((reslove, reject) => {
  // reslove('reslove')
  reject('reject')
})

testPromise
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('finally'))
