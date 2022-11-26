import React from 'react';
import { Outlet } from 'react-router';
const WithoutSide = () =>{
  return (
    <>
      <Outlet />
    </>
  );
};
export default WithoutSide