/*
    数组类型
*/

const arr1: Array<number> = [1, 2, 3, 4]
const arr2: number[] = [4, 5, 6, 7, 8]

// ----------
function sum(...args: number[]) {
    return args.reduce((prev, current) => prev + current, 0)
}
sum(1, 2, 4, 5, 6, 7)