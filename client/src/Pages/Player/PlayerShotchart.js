import React, { useState, useEffect } from 'react';
import nba from 'nba';
import * as d3 from 'd3';
import { court, shots } from 'd3-shotchart';
import { hexbin } from 'd3-hexbin';

window.d3_hexbin = {hexbin: hexbin} // workaround library problem

export default function PlayerShotchart() {

    useEffect(() => {
        nba.stats.shots({
            PlayerID: 2546
        })
        .then((response) => {
            const final_shots = response.shot_Chart_Detail.map(shot => ({
                x: (shot.locX + 250) / 10,
                y: (shot.locY + 50) / 10,
                action_type: shot.actionType,
                shot_distance: shot.shotDistance,
                shot_made_flag: shot.shotMadeFlag,
            }))

            const courtSelection = d3.select("#shot-chart")
            // without this line, all updates on court would be ineffect only after changing chartType
            courtSelection.html('')
            const chart_court = court().width(500)
            const chart_shots = shots()
                                  .shotRenderThreshold(this.props.minCount)
                                  .displayToolTips(this.props.displayToolTips)
                                  .displayType(this.props.chartType)
            // selection.call always return the selection and not the return value of function passed in
            courtSelection.call(chart_court)
            courtSelection.datum(final_shots).call(chart_shots)
        })
    })

    return (
        <div id="shot-chart"></div>
    )
}