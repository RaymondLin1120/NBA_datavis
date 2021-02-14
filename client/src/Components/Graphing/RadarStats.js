import { getCoordinateSystemDimensions } from 'echarts';
import React from 'react'
import Chart from './Chart'
import EChart from './EChart.js'

function RadarStats({ config, statData, resize , style, size}) {
    let option = {
      title: {
          text: 'Rankings',
          width: 100,
      },
      //backgroundColor: '#161627',
      tooltip: {
        trigger: 'item'
      },
      legend: {
        type: 'scroll',
        data: config['seasonId'],
        width: 320,
        left:'30%',
        selected: {
            "top70": false,
            "top120": false,
            "top180": false
        }
      },
    //   toolbox: {
    //     show: true,
    //     feature: {
    //         saveAsImage: {}
    //     }
    //   },
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
            {
                name: 'Points', 
                min: Math.min(statData[statData.length - 1].pts, config[config.length - 1].pts),
                max: Math.max(statData[0].pts + statData[0].pts/6,config[config.length - 1].pts)
            },
            { 
                name: 'Rebounds',
                min: Math.min(statData[statData.length - 1].reb, config[config.length - 1].reb),
                max: Math.max(statData[0].reb + statData[0].reb/6,config[config.length - 1].reb)
            },
            {
                name: 'Assists',
                min: Math.min(statData[statData.length - 1].ast, config[config.length - 1].ast),
                max: Math.max(statData[0].ast + statData[0].ast/6,config[config.length - 1].ast)
            },
            {
                name: 'Steals', min: statData[statData.length - 1].stl,
                min: Math.min(statData[statData.length - 1].stl, config[config.length - 1].stl),
                max: Math.max(statData[0].stl + statData[0].stl/6,config[config.length - 1].stl)
            },
            {
                name: 'Blocks',
                min: Math.min(statData[statData.length - 1].blk, config[config.length - 1].blk),
                max: Math.max(statData[0].blk + statData[0].blk/6,config[config.length - 1].blk)
            }
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
            //areaStyle: {normal: {}},
            data: 
                config.map((item) => ({
                    value: [item.pts, item.reb, item.ast, item.stl, item.blk], 
                    name: item.seasonId
                })),
            itemStyle : {
                normal : {
                    label : {
                        show: true, position: 'inner',
                        offset: [10, 0],
                        fontSize: 14,
                        fontWeight:'bold'
                        // formatter : function (params){
                        //           return  params.value + '%\n'
                        //     },
                    },
                    labelLine : {
                        show : true
                    }
                }
            }
        },
        {
            type: 'radar',
            //areaStyle: {normal: {}},
            data: 
                statData.map((item) => ({
                    value: [item.pts, item.reb, item.ast, item.stl, item.blk], 
                    name: item.seasonId
                }))
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