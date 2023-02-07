//TODO 接口和对象类型

interface A{
    name:string
}
//FIXME 同名interface会合并
interface A{
    age:number
}

let obj:A = {
    name:'打磨怪',
    age:18
}

console.log(obj)

interface Person {
    readonly name:string //FIXME readonly 定义属性为只读属性，不可修改
    age?:number//FIXME ? 可选式操作符
    cb?():number
    [propName:string]:any  //FIXME 扩展类型 使用内置变量 [propName:string]  用于可能有未知属性    | 联合类型  number|sting
}

let b:Person = {
    name:'一拳打死你',
    cb: ():number => {
        return 123
    }
}
let b2:Person = {
    name:'你打不死我',
    age:9999
}

let b3:Person = {
    name:'表哥我回来了哦',
    age:18,
    sex:'人妖'
}
// b3.name  = '滚'//错误 ，因name为只读
console.log(b,b2,b3)

//FIXME 继承接口
interface C{
    name:string
}
interface D extends C{
    age:number
}

let d:D = {
    name:'八嘎',
    age:3
}
console.log(d)
