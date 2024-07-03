import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Chart from "react-apexcharts";
import Header from "../Components/Header";

const Dashboard = () => {
  const [areaChartOptions, setAreaChartOptions] = useState({
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    colors: ['#FF7A50'],
    markers: {
      size: 5,
      colors: ['#FF7A50'],
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
  });

  const areaChartSeries = [
    {
      name: 'Site Traffic',
      data: [1500, 2300, 1800, 2500, 2200, 2900, 3200] // Example data for site traffic
    }
  ];

  const [pieChartOptions, setPieChartOptions] = useState({
    chart: {
      type: 'pie'
    },
    labels: ['Active Users', 'Inactive Users'],
    colors: ['#FF7A50', '#FFAA33'],
    legend: {
      position: 'bottom'
    }
  });

  const pieChartSeries = [60, 40]; // Example data for users
  return (
    <>
      <Header />
      <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
        <Sidebar />
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="bg-white rounded-lg shadow p-4 flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                <i className="fa-regular fa-user text-white" style={{ fontSize: "1.5rem" }}></i>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Total Users</h3>
                <p className="text-gray-600">1,234</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                <i className="fa-solid fa-dollar-sign" style={{ fontSize: "1.5rem" }}></i>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Revenue</h3>
                <p className="text-gray-600">$45,678</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                <i className="fa-solid fa-download" style={{ fontSize: "1.5rem" }}></i>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Total Downloads</h3>
                <p className="text-gray-600">567</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                <i className="fa-regular fa-message-smile" style={{ fontSize: "1.5rem" }}></i>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Feedback</h3>
                <p className="text-gray-600">89%</p>
              </div>
            </div>

          </div>
        </div>
        <div className="container mx-auto mt-3 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="card col-span-1 lg:col-span-8 mb-4 shadow"> {/* 8/12 width */}
          <h4 className="text-dark mb-3 font-bold ml-4 mt-3 pt-3">Weekly Site Traffic</h4>
          <Chart options={areaChartOptions} series={areaChartSeries} type="area" height={300} className="px-5" />
        </div>
        <div className="card col-span-1 lg:col-span-4 mb-4 shadow"> {/* 4/12 width */}
          <h4 className="text-dark mb-3 font-bold ml-4 mt-3 pt-3">User Distribution</h4>
          <div className="block w-full">
            <Chart options={pieChartOptions} series={pieChartSeries} type="pie" height={300} />
          </div>
        </div>
      </div>
    </div>
      </div>
    </>
  );
}

export default Dashboard;
