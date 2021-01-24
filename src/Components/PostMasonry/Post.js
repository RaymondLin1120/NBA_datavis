import React from 'react'


function Post({post}) {
    const style = {
        backgroundImage: `url("${require(`../../Assets/Images/${post.image}`)}")`,
        ...post.style
    }
    return (
        <a className = "post" style = {style} href = {post.path}>{post.heading}
            <div className = 'post-image'></div>
        </a>
    )
}
export default Post