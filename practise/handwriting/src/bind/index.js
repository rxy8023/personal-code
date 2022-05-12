Function.prototype.bindNew = function (context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  var self = this;
  // 第 1 个参数是指定的 this，截取保存第 1 个之后的参数
  // arr.slice(begin); 即 [begin, end]
  var args = Array.prototype.slice.call(arguments, 1);

  return function () {
      // 此时的 arguments 是指 bind 返回的函数调用时接收的参数
      // 即 return function 的参数，和上面那个不同
      // 类数组转成数组
      var bindArgs = Array.prototype.slice.call(arguments);
      // 执行函数
      return self.apply( context, args.concat(bindArgs) );
  }
}
