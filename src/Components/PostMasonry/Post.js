import React from 'react'


function Post({post}) {
    const style = {
        backgroundImage: `url("${require(`../../Assets/Images/${post.image}`)}")`,
        ...post.style
    }
    return (
        <a className = "post" style = {style} href = {post.path}>
            <div className = 'post-image'>
                <div className = 'post-content'>
                    <h3 className = 'post-heading'> {post.heading} </h3>
                    <p className = 'post-desc'> Deserunt pariatur laboris mollit pariatur occaecat velit cupidatat eu in consequat consequat aliquip non. </p>
                </div>
            </div>
        </a>
    )
}
export default Post