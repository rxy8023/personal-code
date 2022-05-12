// 实现一个序列化和反序列化query String的类
let qs = require('qs')
const Qs = {
  stringify: (params) => {
    return Object.keys(params)
    .map(qsKey => {
      let qsValue = params[qsKey]
      if (Object.prototype.toString.call(qsValue) === '[object Object]' ) {
        try {
        qsValue = JSON.stringify(qsValue)
        } catch (e) {
          qsValue = ''
        }
      }
      if (Array.isArray(qsValue)) {
        qsValue = qsValue.reduce((acc, cur, index) => {
          // 后续可以支持arrayFormat参数
          return `${acc}&${qsKey}[]=${cur}`
          // return `${acc}&${qsKey}=${cur}`
        }, '')
        qsKey = ''
      } else {
        qsValue = encodeURIComponent(qsValue)
      }

      return `${qsKey}=${qsValue}`
    })
    .join('&')
  },
  parse: (params) => {
    let [, query] = params.split('?')
    return query.split('&').reduce((acc, cur) => {
      let [key, value] = cur.split('=')
      value =  decodeURIComponent(value)
      try {
        value = JSON.parse(value);
      } catch (err) {
        value = value
      }
      if (key.includes('[]')) {
        // 数组
        key = key.substr(0, key.length - 2)
        Array.isArray(acc[key]) ? acc[key].push(value) : acc[key] = [value]
      } else {
        acc[key] = value
      }
      return acc
    }, {})
  }
}

let qsString = Qs.stringify({
  name: "coder",
  age: "20",
  callback: "https://youzan.com?name=test",
  list: ["a", "b"],
  json: {
    str: 'abc',
    num: 123
    }
  })

qsObject = Qs.parse(`?${qsString}`)
console.log(qsString)
console.log(qsObject)
