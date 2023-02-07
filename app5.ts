//TODO 数组类型
let arr:number[] = [1,2,3]//FIXME number类型定义了数组中每一项均为number
let arr1:string[] = ['一个','大笔都','送给你']
let arr2:boolean[] = [true,false,true]
let arr3:any[] = [1,false,'成都没有1',{a:243}]

console.log(arr,arr1,arr2,arr3)

//FIXME 使用<>泛型定义
let narr:Array<number> = [1,2,4]



let sarr:number[][][] = [[[]],[],[]]

let darr:Array<Array<number>> = [[1,3],[3],[]]

console.log(sarr,darr)

//FIXME 类数组
interface IArguments {
    [index:number]:any
    length:number
    callee:Function
}
function Arr(...args:any):void{
    console.log(arguments)
    let arr:IArguments = arguments
    console.log(arr)
}
Arr(4,5,6)

//FIXME 利用接口定义数组。
interface ArrNumber {
    [index:number]:number
}
let gArr:ArrNumber = [1,2,3]
console.log(gArr)
