import React, { useEffect, useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import RadarStats from '../../Components/Graphing/RadarStats'
import { isNullableType } from 'graphql';

const Player_Query = gql`
    query PlayerQuery {
        historicStats {
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
        playerInfo {
            personId
            displayFirstLast
            jersey
            position
            teamName
            teamCity
        }
    }
`
function Player() {
    const [seasonStats, setSeasonStats] = useState([])
    const [playerInfo, setPlayerInfo] = useState([])
    const { loading, error, data } = useQuery(Player_Query);
    
    var temp_arr = []
    
    useEffect(() => {
        if (!loading) {
            temp_arr = data['historicStats'].filter((item) =>
                (item.seasonId === "2020-21" && item.teamAbbreviation === "TOT") || 
                item.seasonId !== "2020-21"
            )
            setSeasonStats(temp_arr.slice(temp_arr.length - 3, temp_arr.length))
            setPlayerInfo(data['playerInfo'])
        }
    }, [data]);
    if (loading) return 'Loading...';

    if (error) return `Error! ${error.message}`;

    // const LoadData = () => {
    //     const { loading, error, data } = useQuery(Player_Query);
    //     if (!loading) {
    //         temp_arr = data['historicStats'].filter((item) =>
    //             (item.seasonId === "2020-21" && item.teamAbbreviation === "TOT") || 
    //             item.seasonId !== "2020-21"
    //         )
    //         setSeasonStats(temp_arr.slice(temp_arr.length - 3, temp_arr.length))
    //         setPlayerInfo(data['playerInfo'])
    //     }
    // }
    // useEffect(() => {
    //     async function anyNameFunction() {
    //         await LoadData();
    //     }
    //     anyNameFunction();
    // }, []);
    // // const arr = [
    // //     {
    // //         fgPct:{subject:"Field-Goal-%"},
    // //         //pg3Pct:{subject:"3s-%"},
    // //         ftPct:{subject:"Free-Throw-%"},
    // //         fG3M:{subject:"3s-%"},
    // //         pts:{subject:"Points"},
    // //         min:{subject:"Minutes"},
    // //         reb:{subject:"Rebounds"},
    // //         ast:{subject:"Assists"},
    // //         stl:{subject:"Steals"},
    // //         blk:{subject:"Blocks"},
    // //         tov:{subject:"Turnovers"}
    // //     }   
    // // ]

    // //console.log(Object.keys(seasonStats[0]))

    // // seasonStats.map((item, key) => (
    // //     //arr[0].min[item.seasonId] = item.min,
    // //     arr[0].fgPct[item.seasonId] = item.fgPct,
    // //     arr[0].ftPct[item.seasonId] = item.ftPct,
    // //     arr[0].fG3M[item.seasonId] = item.fG3M,
    // //     //arr[0].pts[item.seasonId] = item.pts,
    // //     arr[0].reb[item.seasonId] = item.reb,
    // //     arr[0].ast[item.seasonId] = item.ast,
    // //     arr[0].stl[item.seasonId] = item.stl,
    // //     arr[0].blk[item.seasonId] = item.blk,
    // //     arr[0].tov[item.seasonId] = item.tov
    // // ))

    // var temp_arr = []
    // // for (const [key, value] of Object.entries(arr[0])) {
    // //     console.log(`key: ${key}, value: ${value}`)
    // //     // temp_arr.push(arr[`${key}`])
    // //     temp_arr.push(arr[0][`${key}`])
    // // }
    // //console.log(seasonStats)
    // seasonStats.map((item) => (
    //     temp_arr.push({
    //         seasonId: item.seasonId,
    //         fgPct: item.fgPct,
    //         ftPct: item.ftPct,
    //         fG3M: item.fG3M,
    //         pts:item.pts,
    //         min: item.min,
    //         reb: item.reb,
    //         ast: item.ast,
    //         stl: item.stl,
    //         blk: item.blk,
    //         tov: item.tov
    //     })
    // ))

    // console.log(temp_arr)

    return (
        <div className="playerDashboard">
            <section className="playerInfo-container">
                <div className="player-headshot">
                    <img src = {require("../../Assets/Images/avatar.png")}></img>
                    {/* <p> {playerInfo.displayFirstLast}</p> */}
                </div>
                <div className="playerInfo">
                    {/* <p> Name: {playerInfo[0].displayFirstLast} </p>
                    <p> Team: {playerInfo[0].teamCity} {playerInfo[0].teamName} </p>
                    <p> Position: {playerInfo[0].position} </p>
                    <p> Jersey: {playerInfo[0].jersey} </p> */}
                </div>
            </section>
            <RadarStats config = {seasonStats} style = {{height:'350px', width:'1050px'}}/> 
        </div>
    )
}

export default Player;