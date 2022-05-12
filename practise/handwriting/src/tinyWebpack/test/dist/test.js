(function(modules) {
    const require = id => {
      const {factory, map} = modules[id]
      const localRequire = requireDeclarationName => require(map[requireDeclarationName])
      const module = {exports: {}}
      factory(module.exports, localRequire )
      return module.exports
    }
    require(0)
  })({0: {
      factory: (exports, require) => {
        "use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log('test');
var a = 'test';

function hashfunc() {
  var a = 2;
}

var obj = {
  c: 123
};
Object.keys(_objectSpread({
  a: 1
}, c)).map(function (k, v) {
  console.log(k, v);
});
      },
      map: {}
    }})
  