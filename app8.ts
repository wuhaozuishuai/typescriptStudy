//TODO 内置对象
//FIXME RegExp正则
const regexp:RegExp = /\w\d\s/

//FIXME Date日期
const date:Date =  new Date()
const date1:number =  new Date().getDate()

//FIXME Error错误
const error:Error =  new Error()

//TODO BOM  DOM
const list:NodeList = document.querySelectorAll('#list li')

console.log(list)
const body:HTMLElement  = document.body
console.log(body)


const div:HTMLDivElement = document.querySelector('div')
console.log(div)

document.body.addEventListener('click',(e:MouseEvent)=>{
    console.log(e)
})

function promise():Promise<number>{
    return new Promise<number>((resolve,reject)=>{
        resolve(1)
    })
}
promise().then(res=>{
    console.log(res)
})
