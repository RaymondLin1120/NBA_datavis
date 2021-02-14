import { getCoordinateSystemDimensions } from 'echarts';
import React from 'react'
import Chart from './Chart'
import EChart from './EChart.js'

function PieChart({ config, title, resize , style, size}) {
    let option = {
        title: {
            text: '某站点用户访问来源',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // orient: 'vertical',
            // left: 'left',
        },
        series: [
            {
                name: title
                type: 'pie',
                radius: '50%',
                data: [

                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
  return (
        <Chart config={config}>
            <EChart option={ option } resize={ resize } style={ style }/>
        </Chart>
    )
}
  
  export default PieChart