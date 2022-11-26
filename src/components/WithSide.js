import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
const WithSide = () =>{
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};
export default WithSide