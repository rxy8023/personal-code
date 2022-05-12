// toUpperCase
//  将一个json数据的所有key从下划线改为驼峰
const mockJsonData1 = {
  aBbc: 123,
  aG: [ 1, 2, 3, 4 ],
  aD: { s: 2, sD: 3 },
  aF: [ 1, 2, 3, { aG: 5 } ],
  aDSS: 1
}
const mockJsonData2 = {
  a_bbc: 123,
  a_g: [ 1, 2, 3, 4 ],
  a_d: { s: 2, s_d: 3 },
  a_f: [ 1, 2, 3, { a_g: 5 } ],
  a_d_s_s: 1
}
const toUppterCaseWord = (str) => {
  return str.replace(/\_(\w)/g,  (all, letter) => {
    return letter.toUpperCase();
  });
  // const arr = str.split("_");
  // console.log(arr);
  // return `${arr[0]}${arr.slice(1).reduce((acc, cur) => {
  //   return `${acc}${cur[0].toUpperCase()}${cur.slice(1)}`;
  // }, "")}`;
};
toLineCaseWord = (str) => {
  // return str.replace(/([A-Z])/g, "_$1").toLowerCase();
  return str.replace(/([A-Z])/g, (all, letter) => {
    return `_${letter.toLowerCase()}`
  })
};
const toUppterCase = (data) => {
  const newObj = Array.isArray(data) ? [] : {};
  Object.keys(data).map((k) => {
    const newKey = toLineCaseWord(k);
    if (typeof data[k] === "object") {
      newObj[newKey] = toUppterCase(data[k]);
    } else {
      newObj[newKey] = data[k];
    }
  });
  return newObj;
};

console.log(toUppterCase(mockJsonData1));
