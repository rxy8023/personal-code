# 接口

## 可选属性
```js
// 可选属性
interface Config {
  color?: string;
  width?: number;
}
function logConfig(config: Config): { color: string, area: number } {
  const result = { color: 'red', area: 100 };
  if (config.color) {
    result.color = config.color;
  }
  if (config.width) {
    result.area = config.width * config.width;
  }
  return result;
}
logConfig({ color: 'red' });
```
可选属性好处:
- 对可能存在的属性进行预定义
- 可以提前捕获不存在的定义并报错

## 只读属性
使用`readonly`属性修饰符后，该属性假如被重新赋值会报错
```js
// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}
const p1: Point = { x: 1, y: 2 };
// Cannot assign to 'x' because it is a constant or a read-only property.
p1.x = 2;
```
除此之外还可以使用只读数组类型`ReadonlyArray<T>`。只读数组内部的元素不可重新赋值，而且被剥离了所有的变异方法
```js
const ro: ReadonlyArray<number> = [1, 2, 3];
// Index signature in type 'ReadonlyArray<number>' only permits reading.
ro[0] = 2;
// Property 'push' does not exist on type 'ReadonlyArray<number>'.
ro.push(4);
```

## 额外属性检查
```js
// 额外属性的检查
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
const conf: SquareConfig = {
  color: 'red',
  width: 321,
  foo: 'bar',
};
```
需要注意的是，额外属性指定的类型，必须是其他属性的父类型。例如这里`any`就是`string`和`number`的父类型。

## 函数类型
为了检查接口的函数类型，需要定义一个调用签名。但是`tslint`不建议只有函数调用签名的情况下使用`interface`。
```js
// 函数类型的检查
interface SearchFunc {
  (source: string, substring: string): boolean;
  name: string;
}
const mySearch: SearchFunc = (source: string, substring: string) => {
  const result = source.search(substring);
  return result > -1;
};
mySearch.name = 'name';
```

## 可索引类型
可索引类型描述了*对象的索引*的类型，还描述*索引返回值*的类型
注意:
- 索引签名包括了: number | string
- 签名为number类型的索引对应的返回值，其类型应该为string签名的索引对应的返回值的子类型:
```js
// string不为number的子类型，报错
interface NotOkay {
  [x: number]: string;
  [y: string]: number;
}
// string为any的子类型
interface NotOkay {
  [x: number]: string;
  [y: string]: any;
}
```
- 可以给索引设置为只读
```js
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
```

## 类类型
- 实例接口: 类类型可以约束实例实现的接口
```js
// 可以定义属性签名或者方法签名
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
class Clock implements ClockInterface {
  public currentTime: Date;
  constructor(t: Date) {
    this.currentTime = t;
  }
  public setTime(t: Date) {
    this.currentTime = t;
  }
}
```
- 继承接口
一个接口可以继承一个或多个接口
```js
interface Animal {
  hasLegs: boolean;
}
interface Duck extends Animal {
  canSwim: boolean;
}
```
- 混合类型
有时候，一个对象可以同时做函数和对象使用，同时还是包含额外属性
```js
// 混合类型
interface Count {
  (start: number): void;
  interval: number;
  reset(): void;
}
function getCount(): Count {
  const counter = <Count> function(start: number) { return void(0); };
  counter.interval = 1;
  counter.reset = () => void(0);
  return counter;
}
```
- 接口继承类
当一个接口继承类时，会继承类的成员但不包括实现。假如类中存在私有属性或者私有方法，那就意味着只有这个类的子类可以实现这个接口
```js
class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select() { }
}
// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}
```
