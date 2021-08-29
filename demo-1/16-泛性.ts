/*
    泛型（Generics）
    就是 在我们定义 接口 函数 或者类的时候
    ，我们没有去指定对应的类型，我们在使用的过程中在去定义
*/
export { }

function createNumberArray(length: number, value: number): number[] {
    const arr = Array<number>(length).fill(value)
    return arr
}
const res = createNumberArray(3, 100)
/*
    解释 ：这只能创建数字型的数组 单一
    那如果我想创建一个字符串数组我们需要怎么做呢
*/

// 方法一：
function createStringArray(length: number, value: string): string[] {
    const arr = Array<string>(length).fill(value)
    return arr
}
const resString = createStringArray(3, "你好")

// 方法二 使用泛型
function createArray<T>(length: number, value: T): T[] {
    const arr = Array<T>(length).fill(value)
    return arr
}
const Generics_String=createArray<string>(4,"4343")
const Generics_Number=createArray<number>(4,4343)