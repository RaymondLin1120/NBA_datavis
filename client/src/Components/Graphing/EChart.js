import React, {useEffect, useRef, useState} from 'react'
import * as echarts from 'echarts'

export default function EChart ({option, resize, style}) {
    let chart = useRef(null)
    let [chartState, setChartState] = useState(chart)

    useEffect(() => {
        if (resize) {
            chartState.resize()
        }
        if (!chartState.current) {
            chartState.setOption(option)
        }
        else {
            setChartState(echarts.init(chart.current))
        }
    }, [option, chartState, resize])
    return (
        <div ref={chart} style = {{...style, padding: "20px"}}></div>
    )
}