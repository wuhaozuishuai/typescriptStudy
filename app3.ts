//TODO object Object  {}
//FIXME Object 从原型链上，作为顶端，可以 = 任意类型
let a:Object = 123
let a1:Object = '哇哦'
let a2:Object = true
let a3:Object = {a:21}

//FIXME object 约束为非原始类型，例如 number/string/boolean   定义引用类型 【】 {} function

// let b:object = 123 //错误
// let b1:object = '1321'   //错误
// let b2:object = false    //错误
let b3:object = {b:'发那科'}
let b4:object = [123,454]
let b5:object = ()=>{a:234}


//FIXME {}字面量模式  约等于new Object  支持所有类型  赋值过后无法修改

let c:{} = 123
let c1:{} = '负担了解'
let c2:{} = false
let c3:{} = {c:'gfd'}


let c4:{} = {age:18}
// c4.name = '小妹' //错误
