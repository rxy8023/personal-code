const debounceSimples = (func, wait = 50) => {
  // 缓存一个定时器id
  let timer = 0
  // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果已经设定过定时器了就清空上一次的定时器
  // 开始一个新的定时器，延迟执行用户传入的方法
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
/**
 * debouce
 * @param {function} fn 函数
 * @param {延时} wait 延时时间
 * @param {*} immediate 是否立即执行
 */
function debounce (fn, wait = 50, immediate = true) {
  let timer, context, args
  const lateFunc = () => setTimeout(() => {
    // 执行完成清除定时器
    timer = null
    if(!immediate) {
      fn.apply(context, args)
      context = null
    }
  }, wait)
  // 实际调用的函数
  return function(...param) {
    // 如果没有
    if (!timer) {
      timer = lateFunc()
      immediate ?
        fn.apply(this, param)
      : (() => {
        context = this
        args = param
      })()
    // 如果已有延迟执行函数（later），调用的时候清除原来的并重新设定一个
    } else {
      clearTimeout(timer)
      timer = lateFunc()
    }
  }
}
const throttle = (fn, delay) => {
  // 定义上次触发时间
  let last = 0
  return (...args) => {
      const now = +Date.now()
      if (now > last + delay) {
          last = now
          fn.apply(this, args)
      }
  }
}

const testfn = () => { console.log(123)}
 const fn = debounce(testfn, 100, true)
 fn()
 setTimeout(() => {
   fn()
 }, 500)
