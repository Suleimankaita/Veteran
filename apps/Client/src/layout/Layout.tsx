import {Outlet} from "react-router-dom"
import Fotter from "./Fotter"
import React from 'react'
import Header from "./Header"

const Layout = () => {
  return (
    <>
    <Header/>
    <div className="p-1 min-h-screen">

    <Outlet/>
    </div>
    <Fotter/>
    </>
  )
}

export default Layout