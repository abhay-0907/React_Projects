import React from 'react'
import EmployeeTask from './EmployeeTask'
import { EmployeeDashboardHeader } from './EmployeeDashboardHeader'
import TaskList from '../task/TaskList'
const EmployeeDashBoard = () => {
  return (
    <>
    <div className='text-white bg-[#1C1C1C] p-20 h-screen'>
        <EmployeeDashboardHeader/>
        <EmployeeTask/>
        <TaskList/>
    </div>
    </>
  )
}

export default EmployeeDashBoard