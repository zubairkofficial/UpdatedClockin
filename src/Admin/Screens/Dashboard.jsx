import React, { Component } from "react";
import Sidebar from "../Components/Sidebar";
import Chart from "react-apexcharts";
import Header from "../Components/Header";
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [2019, 2020, 2021, 2022, 2023, 2024],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 501, 49, 20],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Header />
        <div
          id="kt_app_wrapper"
          class="app-wrapper  flex-column flex-row-fluid "
        >
          <Sidebar />
          <div className="d-flex">
            <div className="app p-3">
              <div className="row">
                <h1 className="ml-3">Bars Graph</h1>
                <div className="mixed-chart">
                  <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="500"
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="ml-3">Lines Graph</h1>
              <Chart
                className="m-3"
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="500"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
