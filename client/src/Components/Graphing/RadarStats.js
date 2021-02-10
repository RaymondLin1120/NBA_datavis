import { getCoordinateSystemDimensions } from 'echarts';
import React from 'react'
import Chart from './Chart'
import EChart from './EChart.js'

function RadarStats({ config, statData, resize , style, size}) {
    let option = {
      title: {
          text: 'Averages',
      },
      //backgroundColor: '#161627',
      tooltip: {
        trigger: 'item'
      },
      legend: {
        type: 'scroll',
        data: config['seasonId'],
        selected: {
            "top70": false,
            "top120": false
        }
      },
      toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
      },
      responsive:true,

      radar: [{
          // shape: 'circle',
          name: {
              textStyle: {
                  color: '#fff',
                  backgroundColor: '#999',
                  borderRadius: 3,
                  padding: [3, 5]
              }
          },
          shape: 'circle',
          radius: size,
          //center: ['25%', '50%'],
          indicator: [
              { name: 'Points', max: statData[0].pts + statData[0].pts/2},
              { name: 'Rebounds', max: statData[0].reb + statData[0].reb/2},
              { name: 'Assists', max: statData[0].ast + statData[0].ast/2},
              { name: 'Steals', max: statData[0].stl + statData[0].stl/2},
              { name: 'Blocks', max: statData[0].blk + statData[0].blk/2},
          ]
      }],
    //   {
    //     name: {
    //         textStyle: {
    //             color: '#fff',
    //             backgroundColor: '#999',
    //             borderRadius: 3,
    //             padding: [3, 5]
    //         }
    //     },
    //     shape: 'circle',
    //     radius:size,
    //     center: ['75%', '50%'],
    //     indicator: [
    //         { name: 'Field Goal %', max: 1},
    //         { name: 'Free Throw %', max: 1},
    //         { name: '3P FG %', max: 1},
    //         { name: 'Field Goal Attempts', max: 25},
    //         { name: 'Free Throw Attempts', max: 20},
    //         { name: '3-Point Attempts', max: 20}
    //     ]
    //   }],
      series: [
        {
            type: 'radar',
            areaStyle: {normal: {}},
            data: 
                statData.map((item) => ({
                    value: [item.pts, item.reb, item.ast, item.stl, item.blk], 
                    name: item.seasonId
                }))
        },
        {
            type: 'radar',
            //areaStyle: {normal: {}},
            data: 
                config.map((item) => ({
                    value: [item.pts, item.reb, item.ast, item.stl, item.blk], 
                    name: item.seasonId
                })),
        }
    ]
    //   {
    //     type: 'radar',
    //     radarIndex: 1,
    //     //areaStyle: {normal: {}},
    //     data: 
    //         config.map((item) => ({
    //             value: [item.fgPct, item.ftPct, item.fg3Pct, item.fga, item.fta, item.fG3A], 
    //             name: item.seasonId
    //         }))
    //   }]
  };
  return (
        <Chart config={config}>
            <EChart option={ option } resize={ resize } style={ style }/>
        </Chart>
    )
}
  
  export default RadarStats