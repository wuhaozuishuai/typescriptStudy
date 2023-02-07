//TODO 任意类型
let anys:any = '寂寞寂寞'
anys = 555

let anys2:unknown = 534534
anys2 =  '略略略'
console.log(anys)
console.log(anys2)


// *   unknown比any均为任意类型，unknown比any更安全
// *   unknown类型不能去调用属性和方法

// let unkonw:unknown = {a:1233}
// unkonw.a  报错


// let unkonw:unknown = {a:()=>{123}}
// unkonw.a()  报错


let str:any = '走地鸡'
let str2:string = '爬山虎'
str2 = str
//TODO unknown不能赋值给其他类型，只有unknown和any

// let ustr:unknown = '走地鸡'
// let ustr2:string = '爬山虎'
// ustr2 = ustr
