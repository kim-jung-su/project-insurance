import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class Chart3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        labels: [
          "삼성생명",
          "한화생명",
          "메트라이프",
          "KB생명",
          "신한생명",
          "오렌지라이프"
        ],
        title: {
          text: "생명보험사 현황"
        },
        stroke: {
          width: 0
        },
        fill: {
          opacity: 0.4
        },
        markers: {
          size: 0
        }
      },
      series: [
        {
          name: "종신보험",
          data: [80, 50, 30, 40, 100, 20]
        },
        {
          name: "암보험",
          data: [20, 30, 40, 80, 20, 80]
        },
        {
          name: "연금보험",
          data: [44, 76, 78, 13, 43, 10]
        }
      ]
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radar"
          height="550"
        />
      </div>
    );
  }
}

export default Chart3;
