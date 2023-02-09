//TODO 抽象类
abstract class A{
    name:string
    constructor(name:string) {
        this.name = name
    }
    setName(name:string){
        this.name = name
    }
    abstract getName():string //FIXME abstract不可实现
}

// new A()//FIXME 抽象类不能实例化

class B extends A{
    constructor() {
        super('xfhd');
    }
    getName(): string {
        return this.name
    }
}
let b = new B()
b.getName()


b.setName('5345')
console.log(b)
