import { Routes,Route, Navigate } from "react-router-dom";
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
import Dashbord from "./pages/Dashboard"
import AdminLayout from "./layout/AdminLayout";
import AdminControlCenter from "./components/admin/AdminControlCenter";
import AuthPage from "./pages/AuthPage";
import SuperAdminDashbord from "./pages/SuperAdmin/RHVSuperAdmin";
import RHVNotFound from "./pages/404";

const App = () => {
  return (
    <Routes>


        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminControlCenter />
            </AdminLayout>
          }
        />

{/* 
        <Route
          path="/"
          element={
            <Navigate
              to="/admin"
              replace
            />
          }
        /> */}

      <Route path="/super-admin" element={<SuperAdminDashbord/>}/>

      <Route path="Dash" element={<Dashbord/>}/>
      <Route path="Auth" element={<AuthPage/>}/>
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
       <Route path="*" element={<RHVNotFound />} />
    </Routes>
  )
}

export default App