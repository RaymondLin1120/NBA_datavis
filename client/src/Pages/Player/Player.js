import React, { useEffect, useState } from 'react';
import PlayerProfile from './PlayerProfile';
import { useQuery, gql } from "@apollo/client";
import RadarStats from '../../Components/Graphing/RadarStats'
import SearchBar from '../../Components/SearchBar/SearchBar'

const Player_Query = gql`
    query PlayerQuery ($playerName: String!) {
        historicStats (playerName: $playerName) {
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
        playerInfo (playerName: $playerName) {
            personId
            displayFirstLast
            jersey
            position
            teamName
            teamCity
        }
        currentStats {
            playerId
            playerName
            teamId
            teamAbbreviation
            age
            gp
            w
            l
            wPct
            min
            fgm
            fga
            fgPct
            fG3M
            fG3A
            fg3Pct
            ftm
            fta
            ftPct
            oreb
            dreb
            reb
            ast
            tov
            stl
            blk
            blka
            pf
            pfd
            pts
            plusMinus
            nbaFantasyPts
            dD2
            tD3
            gpRank
            wRank
            lRank
            wPctRank
            minRank
            fgmRank
            fgaRank
            fgPctRank
            fg3mRank
            fg3aRank
            fg3PctRank
            ftmRank
            ftaRank
            ftPctRank
            orebRank
            drebRank
            rebRank
            astRank
            tovRank
            stlRank
            blkRank
            blkaRank
            pfRank
            pfdRank
            ptsRank
            plusMinusRank
            nbaFantasyPtsRank
            dd2Rank
            td3Rank
          }
          leagueGameLog(playerName: $playerName) {
            resource,
            parameters {
              LeagueID
              Season
              SeasonType
              PlayerOrTeam
              Counter
              Sorter
              Direction
              DateFrom
              DateTo
            },
            resultSets {
              name
              headers
              rowSet
            }
        }
    }
`
function Player() {
    const [seasonStats, setSeasonStats] = useState([])
    const [playerInfo, setPlayerInfo] = useState([])
    const [playerGames, setPlayerGames] = useState([])
    const [currentPlayer, setCurrentPlayer] = useState("Bradley Beal")
    const { loading, error, data } = useQuery(Player_Query, {
        variables: {playerName: currentPlayer}
    });
    const [dataLoaded, setDataLoaded] = useState(false);
    
    var temp_arr = []
    useEffect(() => {
        if (!loading) {
            temp_arr = data['historicStats'].filter((item) =>
                (item.seasonId === "2020-21" && item.teamAbbreviation === "TOT") || 
                item.seasonId !== "2020-21"
            )
            setSeasonStats(temp_arr.slice(temp_arr.length - 3, temp_arr.length))
            setPlayerInfo(data['playerInfo'])
            setPlayerGames(data['leagueGameLog'])
            console.log(temp_arr)
            setDataLoaded(true);
        }
    }, [data, currentPlayer]);
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(playerInfo)

    return (
        <div className = "playerPageContainer">
            {dataLoaded && 
                <>
                <SearchBar/>
                <div className="playerDashboard">
                    <PlayerProfile playerInfo={playerInfo}/>
                    <RadarStats config = {seasonStats} style = {{height:'350px', width:'1050px'}}/> 
                    { !dataLoaded && <div>Loading</div> }
                </div>
                </>}
         </div>
    )
}

export default Player;