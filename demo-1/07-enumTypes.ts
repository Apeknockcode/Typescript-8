/*
    枚举类型 某几个数值 来代表状态
*/
export { }

// const PostState={
//     Draft:0,
//     Unpublished:1,
//     Published:2
// }

// 数值枚举
// enum PostState {
//     Draft = 0,
//     Unpublished = 1,
//     Published = 2
// }

//字符串枚举
// enum PostState {
//     Draft = "a",
//     Unpublished = "b",
//     Published = "c"
// }

// 常量枚举 经常使用
const enum PostState {
    Draft = 0,
    Unpublished = 1,
    Published = 2
}
const post = {
    title: "Hello Ts",
    content: "Typescript is a typed superset of javascript",
    state: PostState.Draft//0 代表抄稿 1 未发布 2 已发布,
}

