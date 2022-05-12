/**
 * 1. 实现 flatten 方法
 *
 * 输入：[[1, 2, 2], [3, 4, '5', 5], [6, 7, 8, 9 , [11, 12, [12, 13, [14]]]], 10]
 * 输出：[1,2,2,3,4,'5',5,6,7,8,9,11,12,12,13,14,10]./
 */
 const a = [[1, 2, 2], [3, 4, '5', 5], [6, 7, 8, 9 , [11, 12, [12, 13, [14]]]], 10];
 const flatten =(arr) => {
  //  let newArr = []
  //  arr.forEach(item => {
  //   if (Array.isArray(item)) {
  //     return newArr = newArr.concat(flatten(item))
  //   } else {
  //     newArr.push(item)
  //   }
  //  })
  //  return newArr
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) return acc.concat(flatten(cur))
    return acc.concat(cur)
  }, [])
 }
 console.log(flatten(a))
