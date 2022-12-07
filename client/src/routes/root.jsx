import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import Home from '../pages/Home';


function Root() {
  
  const locationActual = useLocation()
  
  return (
    <>
      <NavBar/>
      { locationActual.pathname !== "/" ? <Outlet /> : <Home/>}    
    </>
  );
}

export default Root;