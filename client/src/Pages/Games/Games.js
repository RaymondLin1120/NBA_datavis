import React, { useEffect, useState } from 'react';
import { useQuery, gql } from "@apollo/client";

const Game_Query = gql`
    query GameQuery {
        scoreboard {
            gameHeader {
                gameDateEst
                gameSequence
                gameId
                gameStatusId
                gameStatusText
                gamecode
                homeTeamId
                visitorTeamId
                season
                livePeriod
                livePcTime
                livePeriodTimeBcast
            }
            lineScore {
                gameDateEst
                gameSequence
                gameId
                teamId
                teamAbbreviation
                teamCityName
                teamWinsLosses
                ptsQtr1
                ptsQtr2
                ptsQtr3
                ptsQtr4
                ptsOt1
                ptsOt2
                ptsOt3
                ptsOt4
                pts
                fgPct
                ftPct
                fg3Pct
                ast
                reb
                tov
            }
        }
    }	
`

function Games() {
    const [gameHeader, setGameHeader] = useState([]);
    const [lineScore, setLineScore] = useState([]);

    const { loading, error, data } = useQuery(Game_Query);
    
    var temp_arr = []
    useEffect(() => {
        if (!loading) {
            setGameHeader(data['scoreboard']['gameHeader'])
            setLineScore(data['scoreboard']['lineScore'])
        }
    }, [data]);
    console.log(gameHeader)

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className = "gameDashboard">
            <h1 className = "Date"> Today's Games </h1>
        </div>
    )
}

export default Games
