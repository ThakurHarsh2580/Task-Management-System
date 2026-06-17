import React, { useContext, useEffect } from 'react'
import Login from '../components/Auth/Login';
import EmployeeDashboard from '../components/Dashboard/EmployeeDashboard';
import AdminDashboard from '../components/Dashboard/AdminDashboard';
import { setLocalStorage } from '../utils/LocalStorage';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const App = () => {

  // Only initialize localStorage if it's empty
  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    setLocalStorage();
  }, []);

  const {user, setUser} = useContext(AuthContext);
  
  return (
    <Routes>
      <Route path='/' 
        element={
          !user ? <Login /> 
            : (user.role === "employee") ? <EmployeeDashboard /> : <AdminDashboard />
        }
      />
    </Routes>
  )
}

export default App;