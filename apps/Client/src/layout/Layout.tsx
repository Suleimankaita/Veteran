import {Outlet} from "react-router-dom"
import Fotter from "./Fotter"
import React from 'react'
import Header from "./Header"

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Fotter/>
    </>
  )
}

export default Layout