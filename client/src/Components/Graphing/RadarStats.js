import { getCoordinateSystemDimensions } from 'echarts';
import React from 'react'
import Chart from './Chart'
import EChart from './EChart.js'

function RadarStats({ config, resize , style}) {
    let option = {
      title: {
          text: 'Averages',
      },
      //backgroundColor: '#161627',
      tooltip: {
        //   axisPointer : {
        //       type:'cross'
        //   }
      },
      toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
      },
      legend: {
          data: config['seasonId']
      },
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
          center: ['25%', '50%'],
          indicator: [
              { name: 'Points', max: 40},
              { name: 'Rebounds', max: 15},
              { name: 'Assists', max: 15},
              { name: 'Steals', max: 5},
              { name: 'Blocks', max: 2},
          ]
      },
      {
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        shape: 'circle',
        center: ['75%', '50%'],
        indicator: [
            { name: 'Field Goal %', max: 1},
            { name: 'Free Throw %', max: 1},
            { name: '3P FG %', max: 1},
            { name: 'Field Goal Attempts', max: 25},
            { name: 'Free Throw Attempts', max: 20},
            { name: '3-Point Attempts', max: 20}
        ]
      }],
      series: [{
        //axisName: 'James Harden Average',
        type: 'radar',
        //areaStyle: {normal: {}},
        data: 
            config.map((item) => ({
                value: [item.pts, item.reb, item.ast, item.stl, item.blk], 
                name: item.seasonId
            }))
      },
      {
        //axisName: 'James Harden Average',
        type: 'radar',
        radarIndex: 1,
        //areaStyle: {normal: {}},
        data: 
            config.map((item) => ({
                value: [item.fgPct, item.ftPct, item.fg3Pct, item.fga, item.fta, item.fG3A], 
                name: item.seasonId
            }))
      }]
  };

  return (
        <Chart config={config}>
            <EChart option={ option } resize={resize} style={ style }/>
        </Chart>
    )
}
  
  export default RadarStats