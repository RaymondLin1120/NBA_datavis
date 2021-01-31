import { getCoordinateSystemDimensions } from 'echarts';
import React from 'react'
import Chart from './Chart'
import EChart from './EChart.js'

function RadarStats({ config, resize }) {
    //const { data } = config

    let option = {
      title: {
          text: 'Player Stats'
      },
      tooltip: {
        //   axisPointer : {
        //       type:'cross'
        //   }
      },
      legend: {
          data: config['seasonId']
      },
      radar: {
          // shape: 'circle',
          name: {
              textStyle: {
                  color: '#fff',
                  backgroundColor: '#999',
                  borderRadius: 3,
                  padding: [3, 5]
              }
          },
          indicator: [
              { name: 'Points', max: 40},
              { name: 'Rebounds', max: 15},
              { name: 'Assists', max: 15},
              { name: 'Steals', max: 5},
              { name: 'Blocks', max: 5},
              { name: 'Turnovers', max: 7}
          ]
      },
      series: [{
        axisName: 'James Harden Average',
        type: 'radar',
        //areaStyle: {normal: {}},
        data: 
            config.map((item) => ({
                value: [item.pts, item.reb, item.ast, item.stl, item.blk, item.tov], 
                name: item.seasonId
            }))
      }]
  };

  return (
        // <Chart config={config} resize={resize}>
        //     { data &&
                <EChart option={ option } resize={resize}/>
        //     }
        // </Chart>
    )
}
  
  export default RadarStats