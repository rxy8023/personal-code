# 基础类型

## 数组 Array
数组有两种表示方法，`T[]` 和 `Array<T>`。
```js
const arr: number[] = [1, 2, 3];
```

## 元祖 Tuple
Tuple 用于表示多类型的数组。
```js
const tp: [string, number] = [`string`, 1];
```

## 枚举
默认从 0 开始，我们也可以赋值。
还可以根据索引拿到 enum name。
1. 限定可能出现的值，避免魔法常量
2. 增加可读性
```js
enum DeliveryStatus = { Ready = 1, Loading, Completed }
console.log(DeliveryStatus.Ready, DeliveryStatus.Loading);
// 1 2
```

## Any
在不清楚变量类型或者变量类型为动态时，可以设置为任意类型

## Void
`void`意味着`undefined`或`null`，一般函数没有返回值时，可以设置返回类型为`void`

## Null与Undefind
默认情况下`null`和`undefined`是所有类型的子类型。但建议指定`--strictNullChecks`标记，让`undefined`只能复制给`void`或者本身。

## 类型断言
暗示编译器，我已进行关键的检查
```js
let str: any = `string`;
const strLength: number = (str as string).length;
str = 1;
```