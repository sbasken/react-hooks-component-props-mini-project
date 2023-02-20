import React from "react"
import Article from "./Article"
import blogData from "../data/blog"

function ArticleList() {
    const posts = blogData.posts
    const postElement = posts.map(post => {
        return <Article title={post.title} date={post.date} preview={post.preview}/>
    })

    console.log(postElement)

    return (
        <main>
            {postElement}
        </main>
    )
}

export default ArticleList