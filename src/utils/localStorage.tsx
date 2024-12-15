import React from 'react'
import {Employees, Admin} from './Data.js'

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(Employees));
    localStorage.setItem('admin', JSON.stringify(Admin))
}
export const getLocalStorage =() =>{
    const employeeData = JSON.parse(localStorage.getItem('employees'));
    const adminData = JSON.parse(localStorage.getItem('admin'))
    console.log(adminData, Employees)
}