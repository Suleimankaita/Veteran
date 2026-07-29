import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import React from 'react'
import Layout from "./layout/Layout";
import About from "./pages/About";
import Our_mission from "./pages/Our-mission"
import Our_Structure from "./pages/Our-Structure"
import ProgressPage from "./pages/ProgressPage";
const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/our-mission" element={<Our_mission/>} />
      <Route path="/our-structure" element={<Our_Structure/>} />
      <Route path="/progress" element={<ProgressPage/>} />
      </Route>
    </Routes>
  )
}

export default App