// 实现一个类似 lodash _.get的方法，要求可以安全的从一个对象中获取key
const safeGet = (obj, path, defaultValue) => {
  return (
    (!Array.isArray(path)
      ? path.replace(/\[/g, ".").replace(/\]/g, "").split(".")
      : path
    ).reduce((acc, cur) => {
      return (acc || {})[cur];
    }, obj) ||
    defaultValue ||
    ""
  );
};
// _.get(obj, path)
//
let mockData = {
  a: [
    {
      b: {
        c: 3,
      },
    },
  ],
  e: {
    f: {
      g: 4,
    },
    h: [1],
  },
};

let test = safeGet(mockData, 'a[0].b.c');
let test1 = safeGet(mockData, 'e.f.g');
let test2 = safeGet(mockData, 'e.h[0]');



console.log(test);
console.log(test1);
console.log(test2);

