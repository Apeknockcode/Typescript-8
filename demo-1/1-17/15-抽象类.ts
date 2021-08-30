/*
    抽象类
    跟接口类似，他也是来约束子类的成员，
    区别：
      --抽象类包含具体的实现，而接口他只是一个成员的抽象不包含具体实现

*/
export { }

/*
    定义方式 abstract 
    被抽象定义过后 只能被继承 不能用new 方式创建对应的实力对象了
*/
abstract class Animal {
    eat(food: string): void {
        console.log(`呼噜呼噜的吃:${food}`)
    }


    // 定义抽象方法
    abstract run(distance: number): void
}

class Dog extends Animal {
    run(distance: number): void {
        console.log(`爬行:${distance}`)
    }
    // 如果父类中创建了抽象方法 在子类中必须要实现这个方法
}

const d = new Dog()
d.eat("空气")
d.run(2323)