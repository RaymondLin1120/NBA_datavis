import React from 'react'
import PostMasonry from '../Components/PostMasonry/PostMasonry'

const posts = [
    {
        heading: "Player Stats",
        path: "/Player",
        image: "player-background.jpg"
    },
    {
        heading: "Team Stats",
        path: "/",
        image: "nba-team.png"
    },
    {
        heading: "Interactive Player Comparison",
        path: "/",
        image: "nba-duos.jpg"
    },
    {
        heading: "Team Stats",
        path: "/Team-Comparison",
        image: "lakers.png"
    },
    {
        heading: "Shot Charting",
        path: "/",
        image: "shot-chart.png"
    },
    {
        heading: "Fantasy Analysis",
        path: "/",
        image: "box-score.png"
    },
]

const homeConfig = {
    0: {
        gridArea: '1 / 1 / 3 / 3',
    },
    1: {
        gridArea: '1 / 3 / 3 / 3',
    },
    2: {
        gridArea: '1 / 4 / 1 / 6'
    },
    3: {
        gridArea: '2 / 4 / 4 / 6'
    },
    4: {
        gridArea: '3 / 1 / 3 / 2'
    },
    5: {
        gridArea: '3 / 2 / 3 / 4'
    }
}

const mergeStyles = function (posts, config){
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}

mergeStyles(posts, homeConfig)

function home() {
    return (
        <main className='Home'>
            <PostMasonry posts = {posts} columns={5} />    
        </main>
    )
}

export default home