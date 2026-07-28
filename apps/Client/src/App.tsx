import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import React from 'react'
import Layout from "./layout/Layout";
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      </Route>
    </Routes>
  )
}

export default App