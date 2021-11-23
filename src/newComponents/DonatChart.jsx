import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';

import './styles/DonatChart.css';

export default function DonatChart({projects, pointer, datas, colors, setCursorZone}){

  const pieChart = useRef();

  function OnClick(event){

    console.log(event)
  }


  useEffect(() => {

      const pieData = d3.pie().value(d => d.num)(datas);

      const arc = d3.arc().innerRadius(0).outerRadius(62)

      const colorsArr = d3.scaleOrdinal(pointer);

      const svg2 = d3.select(pieChart.current)
                      .attr('position', "relative")
                      .attr('width', "100%")
                      .attr('height', "100%")
                      .append('g')
                        .attr('transform', 'translate(80, 77)')
      
      svg2.append('g')
              .selectAll('path')
              .data(pieData)
              .join('path')
                  .attr('position', "relative")
                  .attr('d', arc)
                  .attr('fill', (d, i) => colorsArr(i))

    }, [pointer, datas])
    
  useEffect(() => {


      const pieData = d3.pie().value(d => d.num)(datas);

      const arc = d3.arc().innerRadius(0).outerRadius(60)

      const colorsArr = d3.scaleOrdinal(colors);

      const svg = d3.select(pieChart.current)
                      .attr('position', "relative")
                      .attr('width', "100%")
                      .attr('height', "100%")
                      .append('g')
                        .attr('transform', 'translate(80, 77)')

      const tooldiv = d3.select('#chart-container')
                          .append('div')
                          .style('visability', 'hidden')
                          .style('position', 'absolute')
                          .style('background-color', 'green')
                          .style('color', 'white')
      
      svg.append('g')
              .selectAll('path')
              .data(pieData)
              .join('path')
                  .attr('position', "relative")
                  .attr('className', "path")
                  .attr('cursor', "pointer")
                  .attr('d', arc)
                  .attr('fill', (d, i) => colorsArr(i))
                  .attr('stroke', 'white')
                  .on('mouseover',(e, d) => {

                  })
                  .on('click', (e, d) => {

                    let numOfTotalAction = null
                    let cursorIndex = null;

                    if (d.data.actions === 'Codes' || d.data.actions === 'Created'&& d.index !== cursorIndex) {
                      setCursorZone(d.data.actions)
                      cursorIndex = d.index;
                      numOfTotalAction = projects.docs.totalDocs;
                    }

                    if (d.data.actions === 'Issues'|| d.data.actions === 'Comments' && d.index !== cursorIndex) {
                      setCursorZone(d.data.actions)
                      cursorIndex = d.index
                      numOfTotalAction = projects.issues.totalIssues;
                    }
                    
                    if (d.data.actions === 'Docs' || d.data.actions === 'Edits' && d.index !== cursorIndex) {
                      
                      setCursorZone(d.data.actions)
                      cursorIndex = d.index
                      numOfTotalAction = projects.codes.totalCodes;
                    }

                    // tooldiv.style('visability', 'visible')
                    //     .text(`${numOfTotalAction}`)
                  })
                  .on('mousemove', (e, d) => {

                    // tooldiv.style('top', (e.pageY-50) + 'px')
                    // .style('left', (e.pageX-50) + 'px')
                  })

    }, [pointer, datas])


  return(
    <div id="chart-container">
        <form onSubmit={OnClick}>
            <svg style={{position: 'relative'}} ref={pieChart}></svg>
        </form>
      </div>

  )
}