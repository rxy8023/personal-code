// 封装并行控制，利用generator和promise封装一个并行控制

function run (gen) {
  return new Promise((reslove) => {
    const g = gen()
    function next (data) {
      const res = g.next(data)
      if (res.done) {
        reslove(res.value)
        return res.value
      }
      res.value.then(resVal => next(resVal))
    }
    next()
  })
}


let a = run(function*() {
  const res1 = yield new Promise((reslove) => reslove({a: 1}))
  console.log(res1);
  // {
  //   "a": 1
  // }
  const res2 = yield new Promise((reslove) => reslove({a: 2}))
  console.log(res2);
  return new Promise((reslove => reslove({a: 3})))
  // {
  //   "b": 2
  // }
  })

  a.then(res => {
    console.log(res, 'res')
  })
