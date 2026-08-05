import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import React from 'react'
import Layout from "./layout/Layout";
import About from "./pages/About";
import Our_mission from "./pages/Our-mission"
import Our_Structure from "./pages/Our-Structure"
import Programs from "./pages/Programs";
import ResourcesPage from "./pages/Resource";
import Gallery from "./pages/GalleryPage"
import JoinMembership from "./pages/Join-member"
const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/our-mission" element={<Our_mission/>} />
      <Route path="/our-structure" element={<Our_Structure/>} />
      <Route path="/programs" element={<Programs/>} />
      <Route path="/Resources" element={<ResourcesPage/>} />
      <Route path="/join-membership" element={<JoinMembership/>} />
      <Route path="/Gallery" element={<Gallery/>} />
      </Route>
    </Routes>
  )
}

export default App