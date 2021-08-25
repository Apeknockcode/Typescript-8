/*
    作用域问题
*/
// const a:string ="hello" // 报错 因为在02ts 文件中 已经声明了 a 变量 
// 修正===> 通过立即执行函数 或者 通过 模块来解决
// (function () {
//     const a: string = 'hello'
// })()
const a: string = "hello"
export { }


