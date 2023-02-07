//TODO Class类

//FIXME public 内部外部都可以访问,默认属性都为public
//FIXME private 只有类内部访问，私有
//FIXME protected 只有类内部和子类访问

class Person{
    public name:string
    private age:number
    protected sub:boolean = true
    static aaa:string = 'aaa'
    constructor(name:string,age:number,sub:boolean) {
        this.name = name
        this.age = age
        this.sub = sub
        //FIXME 构造器中也不能通过this访问static变量
    }
    static bbb():number{
        //FIXME 静态方法中不能通过this访问类的属性，除了其他的static变量
        return 123
    }
    static dev(){
        console.log(this.bbb())
        console.log(this)
        return 'dev'
    }
}

class Man extends Person{
    constructor() {
        super('猪儿虫',99,false);
        //FIXME this.age  不能访问
    }
}

let a = new Person('猪儿虫',99,false)
console.log(a)
console.log(a.name)
console.log(Person.aaa)
console.log(Person.bbb())
console.log(Person.dev())
// console.log(a.age)  只能类内部访问
// console.log(a.sub)  只能类内部和子类访问


//FIXME 使用 implements 关键字，利用interface约束class
interface Test{
    run(type:boolean):boolean
}
interface HHH{
    set():void
}
class A{
    params:string
    constructor(params:string) {
        this.params = params
    }
}

class Lts extends A implements Test,HHH{
    run(type:boolean):boolean{
        return type
    }
    set() {
    }
}
