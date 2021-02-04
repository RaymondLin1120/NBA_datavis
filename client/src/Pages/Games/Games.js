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
    const [dataLoaded, setDataLoaded] = useState(false)
    const { loading, error, data } = useQuery(Game_Query);
    
    var temp_arr = []
    useEffect(() => {
        if (!loading) {
            setGameHeader(data['scoreboard']['gameHeader'])
            setLineScore(data['scoreboard']['lineScore'])
            setDataLoaded(true)
        }
    }, [data]);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(lineScore)
    return (
        <section className = "gameDashboard">
            { !dataLoaded && <div>Loading</div> }
            {dataLoaded &&
                <>
                <h1 className = "Date"> Today's Games </h1>
                <div className = "gameContainer">
                    <img src = {require("../../Assets/Images/avatar.png")} style = {{height: '100px', width: '100px'}}></img>
                    <img src = {require("../../Assets/Images/avatar.png")} style = {{height: '100px', width: '100px'}}></img>
                    <p> {gameHeader[0]['homeTeamId']} </p>
                    <p> {gameHeader[0]['visitorTeamId']} </p>
                    <p> {gameHeader[0]['livePeriodTimeBcast']} </p>
                </div>
                </>
            }  
        </section>
    )
}

export default Games
