/*
    接口  
       理解成一种规范 或者是一种契约 
       约定 object 的结构
*/
export { }
// 定义接口 
interface Post {
    title: string
    content: string
}

function pintPost(post: Post) {
    console.log(post.title)
    console.log(post.content)
}

pintPost({
    title: "typeScript",
    content: "post content"
})

/*
    补充： 
        -- 可选成员  
        -- 只读成员(在初始化成功之后 就不能在修改了) 
        -- 动态成员 
*/

// 
interface Post_more {
    title: string
    content: string
    subtitle?: string // 可选成员
    readonly summary: string // 只读成员
}

function pintPost_more(post: Post_more) {
    console.log(post.title)
    console.log(post.content)
}

pintPost_more({
    title: "typeScript",
    content: "post content",
    summary: "summary"
})
// summary 在初始化成功之后 就不能在修改了


// 动态成员 
interface Cache {
    [key: string]: string
}
const cache: Cache = {}
cache.title = "动态标题"
cache.content = "动态内容" 