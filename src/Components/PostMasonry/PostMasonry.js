import React from 'react'
import Post from './Post'

function PostMasonry ({posts, columns}) {
    return (
        <section className="masonry" style={{gridTemplateColumns: `repeat(${columns}, minmax(200px, 1fr))`}}>
            {posts.map((post, index) =>
                <Post {...{post, index, key:index}}/>
            )}
        </section>
    )
}

export default PostMasonry