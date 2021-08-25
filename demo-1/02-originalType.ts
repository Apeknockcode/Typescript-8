/*
    原始类型 string number boolean 
*/

const a: string = 'footer'
const b: number = 123
const c: boolean = false
const d: boolean = null //非严格模式下
const e: string = null //非严格模式下


/*
    标准库声明 (内置对象所对应的声明)
*/

const f: void = undefined
const g: null = null
const h: undefined = undefined
const s: symbol = Symbol()
console.log("DOM")

/*
    中文错误消息  
       --- vscode 报错信息修改成中文 找到setting 输入 typescript local 找到相同 设置成 zh-CN
       --- 针对控制台报错信息可以设输入命令 tsc --locale zh-CN
*/ 
const error:string="错误"



