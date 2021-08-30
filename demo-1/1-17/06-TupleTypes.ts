/*
    元组类型 (明确元素数量 以及 每个元素类型的数组) 固定长度的
*/
export { }
const tuple: [number, string] = [12, 'Hello']
// 通过获取下标来获取 元组对应的值
// const age = tuple[0]
// const name = tuple[1]

// 或者 通过解构的方式提取每一个元素
const [age, name] = tuple
