import React, { useEffect, useState } from 'react';
import PlayerProfile from './PlayerProfile';
import { useQuery, gql } from "@apollo/client";
import RadarStats from '../../Components/Graphing/RadarStats'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Boxscores from '../../Components/Graphing/Boxscores'
import ShotChart from '../../Components/Graphing/ShotChart'
import nba from 'nba';
import { useParams } from 'react-router-dom'
import { MdBlock } from 'react-icons/md';
import PlayerHome from './PlayerHome'

const Player_Query = gql`
    query PlayerQuery ($playerId: Int!) {
        historicStats (playerId: $playerId) {
            playerId
            seasonId
            pts
            reb
            ast
            fG3M
            stl
            blk
            min
            tov
            fga
            fG3A
            fgPct
            ftPct
            fg3Pct
            fta
            teamAbbreviation
        }
        playerInfo (playerId: $playerId) {
            personId
            displayFirstLast
            firstName
            lastName
            position
            jersey
            teamName
            teamCity
            teamAbbreviation
        }
        topStats {
            top30 {
              seasonId
              pts: PTS
              reb: REB
              ast: AST
              stl: STL
              blk: BLK
              tov: TOV
            }
            top70 {
              seasonId
              pts: PTS
              reb: REB
              ast: AST
              stl: STL
              blk: BLK
              tov: TOV
            }
            top120 {
              seasonId
              pts: PTS
              reb: REB
              ast: AST
              stl: STL
              blk: BLK
              tov: TOV
            }
            top180 {
                seasonId
                pts: PTS
                reb: REB
                ast: AST
                stl: STL
                blk: BLK
                tov: TOV
            }
        }
        shots (playerId: $playerId) {
            gridType
            gameId
            gameEventId
            playerId
            playerName
            teamId
            teamName
            period
            minutesRemaining
            secondsRemaining
            eventType
            actionType
            shotType
            shotZoneBasic
            shotZoneArea
            shotZoneRange
            shotDistance
            locX
            locY
            shotAttemptedFlag
            shotMadeFlag
            gameDate
            htm
            vtm
        }
    }
`

function Player({match}) {
    const { id } = match.params;
    const [seasonStats, setSeasonStats] = useState([])
    const [playerInfo, setPlayerInfo] = useState([])
    const [playerGames, setPlayerGames] = useState([])
    const [shotData, setShotData] = useState([])
    const [topStats, setTopStats] = useState([])
    
    const [currentPlayer, setCurrentPlayer] = useState(parseInt(id));

    const { loading, error, data } = useQuery(Player_Query, {
        variables: {playerId: currentPlayer}
    });

    const [dataLoaded, setDataLoaded] = useState(false);
    
    useEffect(() => {
        setDataLoaded(false)
        if (id) {
            if (!loading) {
                var temp_arr = []
                var temp_arr1 = []
                var temp_arr2 = []
                temp_arr = data['historicStats'].filter((item) =>
                    item.seasonId === "2020-21"
                    // (item.seasonId === "2020-21" && item.teamAbbreviation === "TOT") || 
                    // item.seasonId !== "2020-21"
                )
                setSeasonStats(temp_arr.slice(temp_arr.length - 1, temp_arr.length))
                setPlayerInfo(data['playerInfo'])

                // data['leagueGameLog']['resultSets'][0]['rowSet'].map((item) => (
                //     temp_arr1.push({
                //         gameID:item[6],
                //         date: item[7],
                //         matchup: item[8],
                //         wl:item[9],
                //         fgPct:parseFloat(item[13]*100).toFixed(1)+"%",
                //         fg3Pct:parseFloat(item[16]*100).toFixed(1)+"%",
                //         ftPct:parseFloat(item[19]*100).toFixed(1)+"%",
                //         min:item[10],
                //         reb:item[22],
                //         ast:item[23],
                //         blk:item[25],
                //         stl:item[24],
                //         tov:item[26],
                //         pf:item[27],
                //         pts:item[28]
                //     })
                // ))
                // setPlayerGames(temp_arr1)
                for (var key of Object.keys(data.topStats)) {
                    if (key !== "__typename") {
                        console.log(key)
                        temp_arr2.push(data.topStats[key])
                    }
                }
                setShotData(data['shots'])
                setTopStats(temp_arr2)
                setDataLoaded(true);
            }
        }
    }, [data]);
/*     if (loading) return 'Loading...';

    if (dataLoaded) {
        console.log(shotData)
    } */

    return (
        <div className = "playerPageContainer">
            <SearchBar setCurrentPlayer = {setCurrentPlayer} setDataLoaded={setDataLoaded} playerInfo={playerInfo} />
            { !id && <PlayerHome />}
            {(dataLoaded && !error && id)  && 
                <>
                <div className="playerDashboard">
                    <PlayerProfile playerInfo={playerInfo} seasonStats = {seasonStats}/>
                    <RadarStats config = {seasonStats} statData = {topStats} style = {{height:'500px', width:'500px'}} size = {160}/>
                    <ShotChart shotData = {shotData} />
                    {/* <Boxscores data = {playerGames} /> */}
                </div>
            </>}
            { error && id && <div> {error.message} </div>}
            { !dataLoaded && id && <div>Loading</div> }
            
         </div>
    )
}

export default Player;