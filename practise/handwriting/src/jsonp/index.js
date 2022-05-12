const jsonp = ({
  url,
  params,
  cbkey = 'callback'
}) => {
  return new Promise((reslove, reject) => {
    try {
      const script = document.createElement('script')
      window.funcNum = window.funcNum ? 1 : window.funcNum + 1
      funName = `func${funcNum}`
      window[funName] = (data) => {
        reslove(data)
        document.removeChild(script)
        delete window[funName]
      }
      script.onerror = () => {
        container.removeChild(script)
        delete window[funName]
        reject('something error hanppend!')
      }
      params[cbkey] = funName
      paramsString = Object.keys(params).reduce((acc, cur) => {
        return `${acc}&${cur}=${params[cur]}`
      })
      script.src = `${url}?${paramsString}`
      document.appendChild(script)
    } catch (e) {
      reject(e)
    }
  })
}
