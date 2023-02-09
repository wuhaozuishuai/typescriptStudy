//TODO 枚举类型 enum
let obj = {
    red:0,
    green:1,
    blue:2
}

//FIXME 数字枚举，
enum Color{
    red,
    green,
    blue
}

console.log(Color)
console.log(Color[0])
console.log(Color.red)

//FIXME 增长枚举 从第一个自定义递增，也可每个自定义
enum Color1{
    red=3,
    green,
    blue
}
console.log(Color1)
console.log(Color1[3])
console.log(Color1.red)

//FIXME 字符串枚举
enum Color2{
    red='red',
    green='green',
    blue='blue'
}
console.log(Color2)
console.log(Color2.red)
console.log(Color2["red"])

//FIXME 异构枚举
enum En{
    yes=1,
    no='no'
}
console.log(En.yes)
console.log(En.no)

//FIXME 接口枚举
interface A{
    red:En.yes,
    name:En.no
}
let obj1:A={
    red:1,
    name:En.no
}
console.log(obj1)

//FIXME const枚举  使用const定义不会被编译为一个对象
const enum Type{
    success,
    fail
}

