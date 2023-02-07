//TODO 基础数据类型
//FIXME 字符型
let str:string = '213'

let muban:string = `cext${str}`

console.log(muban)

//FIXME 数值型
let num:number = NaN
let num1:number = 123
let num2:number = Infinity//无穷大
let num3:number = 0xf00d
console.log(num,num1,num2,num3)

//FIXME 布尔型
let bo:boolean = true
let bo1:boolean = Boolean(0)
console.log(bo,bo1)

//FIXME 空值 void--》undefined/null
let u:void = undefined
// let u1:void = null
console.log(u)

//FIXME undefined/null--》undefined/null
let un:undefined = undefined
let un1:null = null
console.log(un,un1)


//FIXME 函数返回值
//TODO 错误示范

// function fnVoid():void{
//     return 1223
// }

function fnVoid():void{
    console.log(123)
}
fnVoid()
