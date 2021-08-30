/*
    任意类型 （弱类型） any
        ---存在类型安全的问题
*/
export { }

function stringify(value: any): string {
    return JSON.stringify(value)
}
stringify("string")
stringify(100)
stringify(true)
