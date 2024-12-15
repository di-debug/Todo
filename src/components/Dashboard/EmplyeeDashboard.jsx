// import React from 'react'
import Header from '../Others/Header'
import TasklistCmpnt from '../Others/TasklistCmpnt'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = () => {
  return (
    <div className='p-12 bg-[#icicic] h-screen '>
      <Header/>
      <TasklistCmpnt/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
