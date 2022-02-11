import React from 'react'

function ArticleList({posts}){
    return(
        <main>
            {posts.map( post => {
                return <Article post={post}/>
            })}
        </main>
    )
}

export default ArticleList