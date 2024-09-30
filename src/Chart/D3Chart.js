import React, { useEffect } from 'react';
import * as d3 from "d3";
import axios from 'axios';

const D3Chart = () => {
    useEffect(() => {
        getBudget();
    }, []);

    const getBudget = () => {
        axios.get('http://localhost:3000/budget')
            .then((res) => {
                createD3Chart(res.data.myBudget);
            })
            .catch(err => console.error(err));
    };

    const createD3Chart = (budgetData) => {
        const width = 960;
        const height = 450;
        const radius = Math.min(width, height) / 2;

        const color = d3.scaleOrdinal(d3.schemeCategory10);

        d3.select("#d3Chart").selectAll("*").remove(); 

        const svg = d3.select("#d3Chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`);

        const pie = d3.pie()
            .value(d => d.budget)
            .sort(null);

        const arc = d3.arc()
            .outerRadius(radius * 0.8)
            .innerRadius(radius * 0.4);

        const outerArc = d3.arc()
            .outerRadius(radius * 0.9)
            .innerRadius(radius * 0.9);

        const arcs = svg.selectAll(".arc")
            .data(pie(budgetData))
            .enter()
            .append("g")
            .attr("class", "arc");

        arcs.append("path")
            .attr("d", arc)
            .attr("fill", d => color(d.data.title));

        arcs.append("text")
            .attr("transform", d => {
                const pos = arc.centroid(d);
                return `translate(${pos})`;
            })
            .attr("dy", ".35em")
            .style("text-anchor", "middle")
            .text(d => `${d.data.title}: ${d.data.budget}`);
    };

    return (
        <div id="d3Chart" style={{ width: '100%', height: '400px' }}></div>
    );
}

export default D3Chart;
