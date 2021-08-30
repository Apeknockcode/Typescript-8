/*
    类型断言 （并不是类型转换）  
        ---  简言之 ts无法推断出变量的类型，但是作为开发者我们是知道这个变量的类型的
*/
export { }

const array = [2, 3, 54, 5, 54, 5]
const res = array.find(i => i > 0)
// const square = res  * res

// 用法一：变量 as 类型 （ 推荐使用 ）
const num1 = res as number * res as number

/*
    用法二：  <类型>变量 
        ---缺点： 在jsx 文件中 会与 标签 混淆
*/ 

const num2 = <number>res * <number>res