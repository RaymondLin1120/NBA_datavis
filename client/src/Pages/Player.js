import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RadarStats from '../Components/Graphing/RadarStats'

function Player() {
    const [seasonStats, setSeasonStats] = useState([])
    
    // const fields = [min, fGPct, pg3Pct]
    // min,
    // fGPct,
    // pg3Pct,
    // ftPct,
    // fG3M,
    // pts,
    // reb,
    // ast,
    // stl,
    // blk,
    // tov
    useEffect(() => {
        axios.get("http://localhost:8080/player")
        .then((data) => {
            setSeasonStats(data.data.seasonTotalsRegularSeason.filter((item) =>
                (item.seasonId === "2020-21" && item.teamAbbreviation === "TOT") || 
                item.seasonId !== "2020-21"
            ))
        })
    }, []);

    // const arr = [
    //     {
    //         fgPct:{subject:"Field-Goal-%"},
    //         //pg3Pct:{subject:"3s-%"},
    //         ftPct:{subject:"Free-Throw-%"},
    //         fG3M:{subject:"3s-%"},
    //         pts:{subject:"Points"},
    //         min:{subject:"Minutes"},
    //         reb:{subject:"Rebounds"},
    //         ast:{subject:"Assists"},
    //         stl:{subject:"Steals"},
    //         blk:{subject:"Blocks"},
    //         tov:{subject:"Turnovers"}
    //     }   
    // ]

    //console.log(Object.keys(seasonStats[0]))

    // seasonStats.map((item, key) => (
    //     //arr[0].min[item.seasonId] = item.min,
    //     arr[0].fgPct[item.seasonId] = item.fgPct,
    //     arr[0].ftPct[item.seasonId] = item.ftPct,
    //     arr[0].fG3M[item.seasonId] = item.fG3M,
    //     //arr[0].pts[item.seasonId] = item.pts,
    //     arr[0].reb[item.seasonId] = item.reb,
    //     arr[0].ast[item.seasonId] = item.ast,
    //     arr[0].stl[item.seasonId] = item.stl,
    //     arr[0].blk[item.seasonId] = item.blk,
    //     arr[0].tov[item.seasonId] = item.tov
    // ))

    var temp_arr = []
    // for (const [key, value] of Object.entries(arr[0])) {
    //     console.log(`key: ${key}, value: ${value}`)
    //     // temp_arr.push(arr[`${key}`])
    //     temp_arr.push(arr[0][`${key}`])
    // }
    //console.log(seasonStats)
    seasonStats.map((item) => (
        temp_arr.push({
            seasonId: item.seasonId,
            fgPct: item.fgPct,
            ftPct: item.ftPct,
            fG3M: item.fG3M,
            pts:item.pts,
            min: item.min,
            reb: item.reb,
            ast: item.ast,
            stl: item.stl,
            blk: item.blk,
            tov: item.tov
        })
    ))

    console.log(temp_arr)

    return (
        <div>
            <RadarStats config = {temp_arr}/>
        </div>
    )
}

export default Player;