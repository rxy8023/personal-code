
const sleep =  (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}
//ES5
function sleepEs5(callback,time) {
  if(typeof callback === 'function')
    setTimeout(callback,time)
}
