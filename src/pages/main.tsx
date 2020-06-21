import React, { Component } from 'react';
import {topData, bottomData} from '../config';
import API from '../api/api';
import InfoLineItem from '../components/main-page-components/info-line/info-line';
import UserScrollList from '../components/main-page-components/users-scroll-list/users-scroll-list';
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540]
] as Array<any>;

let options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" }
} as object;

class Main extends Component<any, any> {
  
  render() {

    // if( typeof(window) !== 'undefined') {
    //   console.log(window.innerWidth);
    // }

    return (
      <div className="main-page">
        <div className="info-block info-block_top">
          <InfoLineItem data={topData} />
        </div>
        <div className="info-line">
          <div className="info-block info-block_left">
            <div className="info-item info-item_chart">
            <Chart
              chartType="LineChart"
              data={data}
              options={options}
              width="100%"
              height="100%"
              legendToggle
            />  
            </div>
            <InfoLineItem data={bottomData} />
          </div>
          <div className="info-line info-line_tall">
            <UserScrollList />
            <div className="info-item info-item_tall">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;