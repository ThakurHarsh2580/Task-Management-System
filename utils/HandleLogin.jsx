import React, { useState } from 'react'
import {getLocalStorage, setLocalStorage} from './LocalStorage'

const HandleLogin = (email, password) => {
  const {employees, admins} = getLocalStorage();
  
  const employeeUser = employees.find((employee) => {
    return (employee.email === email  && employee.password === password);
  })

  const adminUser = admins.find((admin) => {
    return (admin.email === email  && admin.password === password);
  })

  if(employeeUser) return {id: employeeUser.id, firstName: employeeUser.firstName, role:"employee"};
  else if(adminUser) return {id: adminUser.id, firstName: adminUser.firstName, role:"admin"};
  else alert("Invalid Credeintials!");
  return null;
}

export default HandleLogin;