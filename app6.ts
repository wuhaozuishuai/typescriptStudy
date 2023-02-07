//TODO 函数扩展
const fn = function (name:string,age:number = 30):string{//FIXME 没有传参数时默认30
    return name + age
}
let a = fn('小王八',334)
let b = fn('小王八')
console.log(a)
console.log(b)

const fn2 = function (name:string,age?:number):string{//FIXME ? 可选参数，可以不传，但是获取值时是undefined
    return name + age
}
let c = fn2('就法国')
console.log(c)

interface User{
    name:string
    age?:number
}
const fn3 = function (user:User):string{
    return user.name + user.age
}
let d = fn3({name:'fds',age:0})
console.log(d)


//FIXME 函数重载
//FIXME 重载是方法名字相同，参数不同，返回类型可以相同也可以不相同，
// 如果参数类型不同，则操作函数参数类型应设置为any,参数数量不同可以将不同的参数设置为可选参数

function test(params:number):void
function test(params:string,params2:number):void
function test(params:any,params2?:any):void{
    console.log(params)
    console.log(params2)
}

let f = test(1)
let g = test('大乌龟',8)


