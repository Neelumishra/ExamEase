import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Login,Admin,Student} from "../pages"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} ></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/student" element={<Student/>}></Route>
    </Routes>
  );
}

export default Router