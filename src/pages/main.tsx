import React, { Component } from 'react';
import { topData, bottomData } from '../config';
import API from '../api/api';
import InfoLine from '../components/main-page-components/info-line/info-line';
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
          <InfoLine data={topData} grid={'col-12 col-md-6 col-lg-4 col-xl-3'} />
        </div>
        <div className="row">
          <div className="info-block info-block_left col-12 col-xl-6">
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
            <InfoLine data={bottomData} grid={'col-12 col-md-6 col-xl-6'} />
          </div>
          <UserScrollList />
          <div className="info-item info-item_tall col-12 col-md-6 col-lg-6 col-xl-3">
            <div className="info-item-inner"> </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;