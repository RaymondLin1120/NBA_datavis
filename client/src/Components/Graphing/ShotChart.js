import React, { useRef, useState, useEffect } from 'react'

function ShotChart(props) {

    const svgRef = useRef()

    //var playerArray = props.shotData.resultSets[0].rowSet;

    console.log(props.shotData)
    var x = [];
    var y = [];
    var made = [];
    var attempts = [];

    props.shotData.forEach(function(a){
        x.push(a[a.length-4]);
        y.push(a[a.length-3]);
        made.push(a[a.length-1]);
        attempts.push(a[a.length-2]);
    })

    useEffect(() => {

    })

    return (
        <div>
            Test
        </div>
    )
}

export default ShotChart
