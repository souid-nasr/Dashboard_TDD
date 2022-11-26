import React from "react";
import Statistics from "../../components/Cards/Cards";
import RightSide from "../../components/RigtSide/RightSide";
import Sidebar from "../../components/Sidebar";

import "./MainDash.css";
const MainDash = () => {
  return (
    <div className='Main'>

      <h1>Dashboard</h1>
      <Statistics/>
      <RightSide/>
      </div>

  );
};

export default MainDash;
