import React, { useEffect, useState } from 'react';
import PlayerProfile from './PlayerProfile';
import { useQuery, gql } from "@apollo/client";
import RadarStats from '../../Components/Graphing/RadarStats'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Boxscores from '../../Components/Graphing/Boxscores'
import { MdBlock } from 'react-icons/md';

const Player_Query = gql`
    query PlayerQuery ($playerName: String = "Bradley Beal") {
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
          topStats{
            top30 {
                pts:PTS
                reb:REB
                ast:AST
                stl:STL
                blk:BLK
                tov:TOV
            }
            top70 {
                pts:PTS
                reb:REB
                ast:AST
                stl:STL
                blk:BLK
                tov:TOV
            }
            top120 {
                pts:PTS
                reb:REB
                ast:AST
                stl:STL
                blk:BLK
                tov:TOV
            }
            top180 {
                pts:PTS
                reb:REB
                ast:AST
                stl:STL
                blk:BLK
                tov:TOV
            }
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
    const [currentPlayer, setCurrentPlayer] = useState();

    const { loading, error, data } = useQuery(Player_Query, {
        variables: {playerName: currentPlayer}
    });
    const [dataLoaded, setDataLoaded] = useState(false);
    
    useEffect(() => {
        setDataLoaded(false)
        if (!loading) {
            var temp_arr = []
            var temp_arr1 = []
            temp_arr = data['historicStats'].filter((item) =>
                (item.seasonId === "2020-21" && item.teamAbbreviation === "TOT") || 
                item.seasonId !== "2020-21"
            )
            setSeasonStats(temp_arr.slice(temp_arr.length - 3, temp_arr.length))
            setPlayerInfo(data['playerInfo'])
            //setPlayerGames(data['leagueGameLog']['resultSets'])
            data['leagueGameLog']['resultSets'][0]['rowSet'].map((item) => (
                temp_arr1.push({
                    gameID:item[6],
                    date: item[7],
                    matchup: item[8],
                    wl:item[9],
                    fgPct:parseFloat(item[13]*100).toFixed(1)+"%",
                    fg3Pct:parseFloat(item[16]*100).toFixed(1)+"%",
                    ftPct:parseFloat(item[19]*100).toFixed(1)+"%",
                    min:item[10],
                    reb:item[22],
                    ast:item[23],
                    blk:item[25],
                    stl:item[24],
                    tov:item[26],
                    pf:item[27],
                    pts:item[28]
                })
            ))
            setPlayerGames(temp_arr1)
            setDataLoaded(true);
        }
    }, [data]);
    if (loading) return 'Loading...';

    if (dataLoaded) {
        console.log(seasonStats)
    }

    return (
        <div className = "playerPageContainer">
            <SearchBar setCurrentPlayer = {setCurrentPlayer}/>
            {(dataLoaded && !error)  && 
                <>
                <div className="playerDashboard">
                    <PlayerProfile playerInfo={playerInfo}/>
                    <RadarStats config = {seasonStats} style = {{height:'350px', width:'900px'}} size = {100}/>
                    <Boxscores data = {playerGames} />
                </div>
            </>}
            { error && <div> {error.message} </div>}
            { !dataLoaded  && <div>Loading</div> }
         </div>
    )
}

export default Player;