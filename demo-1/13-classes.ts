/*
    类
        ---  描述 一类具体事物的抽象特征 用来描述一类具体对象的抽象特征
    例如： 手机  [智能手机]
*/

/*
    es6 中 引入了 class 这个类的方法
    TypeScript  增强了 class 相关语法
*/

export { }
class Person {
    name: string //初始值
    age: number //初始值
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHi(name: string): void {
        console.log(`${name} say: Hello`)
    }

    sayBy(name: string): string {
        return `${name} say: beyBey`
    }
}

/* 
    扩展 类
        --- 类的访问修饰符

*/

/*
    类的访问修饰符 
        - public 公共的 
        - private 如果标注了 private 就说明这个属性是 是私有属性 只能在这个类中进行访问
        - protected 受保护   也是不能被外部访问到的
        - readonly 只读属性 在初始化的之后 是不能再次修改的了 

        -- private 和  protected 区别
          --  通过继承的方式能够访问到 protected 的值，而 标注了 private 是访问不到的

*/
class Person_1 {
    public name: string //初始值
    private age: number //初始值
    protected gender: boolean
    constructor(name: string, age: number, gender: boolean) {
        this.name = name
        this.age = age
        this.gender = gender
    }
    sayHi(name: string): void {
        console.log(`${name} say: Hello`)
    }

    sayBy(name: string): string {
        return `${name} say: beyBey`
    }
    getAge(age: number): void {
        console.log(this.age)
    }
}
// 继承
class student extends Person_1 {
    constructor(name: string, age: number, gender: boolean) {
        super(name, age, gender)
        console.log(this.gender)
        // console.log(this.age) //报错
    }
}
const tom = new Person_1("tome", 18, false)
console.log(tom.name)
// console.log(tom.age) // 报错
// console.log(tom.gender) // 报错