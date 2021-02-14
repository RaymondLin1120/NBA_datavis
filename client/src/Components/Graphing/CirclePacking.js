// import React, { useRef, useState, useEffect } from 'react'
// import * as d3 from 'd3'

// function CirclePacking(props) {
    
//     const [data, setData] = useState(props.data)
//     const svgRef = useRef()
    
//     useEffect(() => {
//         const svg = d3.select(svgRef.current)

//         let focus = root;
//         let view;

//         var height = 932
//         var width = 932
//         var root = d3.hierarchy(data)
//                     .count()
//                     .sort((a,b) => b.value - a.value);
        
//         var packLayout = d3.pack()
//             .size([width, height])
//             .padding(3)
        
//         packLayout(root)
//         var color = d3.scaleLinear()
//             .domain([0, 5])
//             .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
//             .interpolate(d3.interpolateHcl)

//         svg.attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
//             .attr('width', `${width}`)
//             .attr('height',`${height}`)
//             .attr("class", "packLayout")
//             .style("display", "block")
//             .style("margin", "0 -14px")
//             .style("background", color(0))
//             .style("cursor", "pointer")
//             .on("click", (event) => zoom(event, root));

//         // const node = svg.selectAll("g").append('g')
//         //     .data(root.descendants().slice(1))
//         //     .enter()
//         //     .append('circle')
//         //     .attr("fill", d => d.children ? color(d.depth) : "white")
//         //     .attr("pointer-events", d => !d.children ? "none" : null)
//         //     .attr('cx', function(d) { return d.x; })
//         //     .attr('cy', function(d) { return d.y; })
//         //     .attr('r', function(d) { return d.r; })
//         //     .on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
//         //     .on("mouseout", function() { d3.select(this).attr("stroke", null); })
//         //     .on("click", (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()));
        
//         // var defs = svg.append('svg:defs');
        
//         // defs.append("svg:pattern")
//         //     .data(root.descendants().slice(1))
//             //.attr("id", d => d.children ? null : d.img)
//             // .attr("width", 100)
//             // .attr("height", 100)
//             // .attr("patternUnits", "userSpaceOnUse")
//             // .append("svg:image")
//             // .attr("xlink:href", 'http://placekitten.com/g/48/48')
//             // .attr("width", 100)
//             // .attr("height", 100)
//             // .attr("x", 0)
//             // .attr("y", 0);

//         const node = svg.append("g")
//             .selectAll("circle")
//             .data(root.descendants().slice(1))
//             .join("circle")
//             .style("fill-opacity", d => (d.parent === root && d.children) ? 1 : 0)
//             .attr("fill", d => d.children ? color(d.depth) : "none")
//             .attr("pointer-events", d => !d.children ? "none" : null)
//             .on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
//             .on("mouseout", function() { d3.select(this).attr("stroke", null); })
//             .on("click", (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()))


//         const label = svg.append("g")
//             .style("font", "10px sans-serif")
//             .attr("pointer-events", "none")
//             .attr("text-anchor", "middle")
//             .selectAll("text")
//             .data(root.descendants())
//             .join("text")
//             .style("fill-opacity", d => d.parent === root ? 1 : 0)
//             .style("display", d => d.parent === root ? "inline" : "none")
//             .text(d => d.data.name)
//             .on("click", (event, d) => console.log(d.data.name));
        
//         zoomTo([root.x, root.y, root.r*2]);
//         function zoomTo(v) {
//             const k = width / v[2];
        
//             view = v;
        
//             label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
//             node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
//             node.attr("r", d => d.r * k);
//           }
        
//           function zoom(event, d) {
//             const focus0 = focus;
        
//             focus = d;
            
//             console.log([focus.x, focus.y, focus.r*2])
//             const transition = svg.transition()
//                 .duration(event.altKey ? 7500 : 750)
//                 .tween("zoom", d => {
//                   const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
//                   return t => zoomTo(i(t));
//                 });
//             console.log(d)
//             node
//                 .transition(transition)
//                 //.attr("fill", d => d.children ? color(d.depth) : "white")
//                 .style("fill-opacity", d => d.parent === focus ? 1 : 0)
//                 .on("start", function(d) { if (d.parent === focus && !d.children) d3.select(this).attr("fill", "white"); })
//                 //.on("end", function(d) { if (d.parent !== focus && !d.children) d3.select(this).attr("fill", color(d.depth)); })
//                 // .on("start", d => {if (!d.children && (d.parent !== focus)) this.attr("fill", "white")})
//                 // .attr("fill", d => d.children ? color(d.depth) : "white")
//                 // .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  
//             label
//               .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
//               .transition(transition)
//                 .style("fill-opacity", d => d.parent === focus ? 1 : 0)
//                 .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
//                 //on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });



//          }

//         // svg.selectAll("path")
//         //     .data([data])
//         //     .join("path")
//         //     .attr("d", value => myLine(value))
//         //     .attr("fill", "none")
//         //     .attr("stroke", "red")

//     },[])
//     return (
//         <svg className="circPack" ref = {svgRef}></svg>
//     )
// }

// export default CirclePacking
