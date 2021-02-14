import { getCoordinateSystemDimensions } from 'echarts';
import React from 'react'
import Chart from './Chart'
import EChart from './EChart.js'

function Gauge({ config, title, resize , style }) {
    let option = {
        title: {
            text: title,
            textStyle: {
                fontSize: 14
            },
            width: 100
            //left: 'center'
        },
        series: [
            {
                type: 'gauge',
                center: ["50%", "60%"],
                startAngle: 200,
                endAngle: -20,
                min: 0,
                max: 100,
                radius: 100,
                splitNumber: 10,
                itemStyle: {
                    color: '#FFAB91'
                },
                // progress: {
                //     show: true,
                //     width: 30
                // },
                pointer: {
                    icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                    length: '12%',
                    width: 12,
                    offsetCenter: [0, '-60%'],
                    itemStyle: {
                        color: 'auto'
                    }
                },
                axisLine: {
                    lineStyle: {
                        width: 15,
                        color: [
                            [0.6, '#67e0e3'],
                            [0.8, '#ff7f35'],
                            [1, '#ff0000']
                        ]
                    }
                },
                axisTick: {
                    distance: -20,
                    splitNumber: 5,
                    lineStyle: {
                        width: 1,
                        color: '#999'
                    }
                },
                splitLine: {
                    distance: -30,
                    length: 14,
                    lineStyle: {
                        width: 3,
                        color: '#999'
                    }
                },
                axisLabel: {
                    distance: -20,
                    color: '#999',
                    fontSize: 16
                },
                anchor: {
                    show: false
                },
                title: {
                    show: true
                },
                detail: {
                    valueAnimation: true,
                    width: '60%',
                    lineHeight: 40,
                    height: '15%',
                    borderRadius: 8,
                    offsetCenter: ['5%', '-15%'],
                    fontSize: 30,
                    fontWeight: 'bolder',
                    formatter: '{value}%',
                    color: 'black'
                },
                data: [{
                    value: (config*100).toFixed(3)
                }]
            }
        ],
    };
    
  return (
        <Chart config={config}>
            <EChart option={ option } resize={ resize } style={ style }/>
        </Chart>
    )
}
  
  export default Gauge