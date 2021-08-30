/*
    object 类型 非原始类型  例如: 对象 数组 函数
*/

export { } //为了确保 示例没有成员变量名上的冲突

const foo0: object = {}
const foo1: object = []
const foo2: object = function () { }


const obj: { foo: number, bar: string } = { foo: 123, bar: 'hello' }
