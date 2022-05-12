Promise.prototype.race = function (Arr) {
  return new Promise((resolve, reject) => {
    Arr.forEach(promise => {
      promise.then(resolve).catch(reject)
    })
  })
}
