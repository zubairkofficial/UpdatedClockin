import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
function Dashboard() {
  return (
    <>
      <Header />
      <div id="kt_app_wrapper" class="app-wrapper  flex-column flex-row-fluid ">
        <Sidebar />
      </div>
    </>
  )
}

export default Dashboard