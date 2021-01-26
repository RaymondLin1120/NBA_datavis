import React from 'react'
import NBA from 'nba'

const curry = NBA.findPlayer('James Harden');
console.log(curry);

NBA.stats.playerProfile({ PlayerID: curry.playerId }).then(console.log)

function Player() {

    return (
        <div>
            <p>test</p>
        </div>
    )
}

export default Player;