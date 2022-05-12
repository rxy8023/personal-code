const tp: [string, number] = ["string", 1];

enum DeliveryStatus { Ready = 1 , End}
let End =  DeliveryStatus.End
// End = '123'

let str: any = `string`;
const strLength: number = (str as string).length;
str = 123;

type Person = {
  name: String
}
type Man = Person & {gender: String}
let tom:Man = {
  name: "tom",
  gender: 'man'
}

// type IPerson1 = {
//   setName(name:string): void;
// }
interface IPerson {
  setName(name:string):void
   PersonEat(food: string, num: number): boolean
}
// type IPerson = { name: string; } | { setName(name:string): void };



class CMan implements IPerson {
  setName(name: string): void {
      // todo
  }
  PersonEat (food: string, num:number):boolean {
    return !!food && !!num
  }
}

interface propType{
  [key: string] : string
}

let props: propType

type dataType = {
  title: string
}
interface dataType1 {
  title: string
}
const data: dataType = {title: "订单页面"}
const data1: dataType1 = {title: "订单页面"}
props = data
// Error:类型“dataType1”不可分配给类型“propType”; 类型“dataType1”中缺少索引签名
// props = data1

type HelloWorld = any
