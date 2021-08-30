/*
   函数类型 （对函数的输入(参数)输出(返回值)类型限制）
*/

export { }
function func1(a: number, b: number): string {
    return "func1"
}
func1(1, 2)


//  可选参数 表达式： 参数名?: 类型
function func2(a: number, b?: number): number {
    return a + b
}

func2(1)

// 参数默认值 
function func3(a: number = 3, b: number = 4): number {
    return a + b
}
func3()
func3(4, 5)

//接受任意参数 通过 rest 操作符
function func4(...rest: number[]): number {
    return rest.reduce((prev, current) => prev + current, 0)
}
func4(1, 2, 3, 4)
// 函数表达式
const func5 = function (a: number, b: number): number {
    return a + b
}
func5(1, 3)