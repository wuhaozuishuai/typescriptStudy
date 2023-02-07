//TODO 类型断言   联合类型   交叉类型
//FIXME 交叉类型
let phone:number | string = 13000000000

let fn = function (type:number | boolean):boolean{
    return !!type
}

let a= fn(23)
console.log(a)

//FIXME 联合类型
interface People{
    name:string
    age:number
}
interface Man{
    sex:number
}
const xiaowangba = (man:People & Man):void=>{
    console.log(man)
}
xiaowangba({name:'小王八',age:20,sex:0})

//FIXME 类型断言 as
let fn2 = function (num:string | number):void{
    console.log((num as string).length)
}
fn2('2343')
fn2(234)


interface A{
    run:string
}
interface B{
    build:string
}
let fn3=(type:A | B):void=>{
    console.log((<A>type).run)
    console.log((type as A).run)
}

fn3({build:'123'})
fn3({run:'124443'})
