/*
    类 ：类 和 接口

    一个接口只去约束一个能力，然后让一个类型同时实现多个接口
*/
export { }

// 定义一个接口 interface
interface Eat {
    eat(food: string): void

}
interface Run {
    run(distance: number): void
}


class Person implements Eat, Run {
    eat(food: string): void {
        console.log(`优雅的吃:${food}`)
    }
    run(distance: number): void {
        console.log(`直立行走:${distance}`)
    }
}

class Animal implements Eat, Run {
    eat(food: string): void {
        console.log(`呼噜呼噜的吃:${food}`)
    }
    run(distance: number): void {
        console.log(`爬行:${distance}`)
    }
}
