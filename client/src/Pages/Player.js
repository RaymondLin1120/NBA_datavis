import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import axios from 'axios';
import ReactEcharts from 'echarts-for-react';
=======
import { useQuery, gql } from "@apollo/client";
import RadarStats from '../Components/Graphing/RadarStats'
>>>>>>> fa030e2ec3cbbc3add0e4a6ad03c8dd6ee765381


const Player_Query = gql`
    query PlayerQuery {
        historicStats {
            seasonId
            pts
            reb
            ast
            fG3M
            stl
            blk
        }
    }
`

const Player = () => {
    const { loading, error, data } = useQuery(Player_Query);
  
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      console.error(error);
      return <div>Error!</div>;
    }
    return <PlayerPage data={data.historicStats} />;
  };

function PlayerPage(props) {
    const [seasonStats, setSeasonStats] = useState([])
    const [playerStats, setPlayerStats] = useState([])
    
<<<<<<< HEAD
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
            
            //setPlayerData(data)

            //setSeasonStats(data.data.seasonTotalsRegularSeason)
            // setSeasonStats(data.data.seasonTotalsRegularSeason.filter((item) =>
            //     item.seasonId === "2020-21" && 
            //     item.teamAbbreviation === "TOT"
            // )[0])
        })
    }, []);

    function renderChart() {
        setTimeout(() => {
            return <ReactEcharts 
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            />
        }, 1000);
    }

    const arr = [
        {
            fgPct:{subject:"Field-Goal-%"},
            //pg3Pct:{subject:"3s-%"},
            ftPct:{subject:"Free-Throw-%"},
            fG3M:{subject:"3s-%"},
            pts:{subject:"Points"},
            min:{subject:"Minutes"},
            reb:{subject:"Rebounds"},
            ast:{subject:"Assists"},
            stl:{subject:"Steals"},
            blk:{subject:"Blocks"},
            tov:{subject:"Turnovers"}
        }   
    ]
=======
    // useEffect(() => {
    //     axios.get("http://localhost:8080/player")
    //     .then((data) => {
    //         setPlayerStats(data.data)
    //         // setSeasonStats(data.data.seasonTotalsRegularSeason.filter((item) =>
    //         //     (item.seasonId === "2020-21" && item.teamAbbreviation === "TOT") || 
    //         //      item.seasonId !== "2020-21"
    //         // ))
    //     })
    //  }, []);
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
>>>>>>> fa030e2ec3cbbc3add0e4a6ad03c8dd6ee765381

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
        <div>
<<<<<<< HEAD
            { renderChart() }
=======
            {/* <RadarStats config = {temp_arr.slice(temp_arr.length - 3, temp_arr.length)}/> */}
>>>>>>> fa030e2ec3cbbc3add0e4a6ad03c8dd6ee765381
        </div>
    )
}

export default Player;