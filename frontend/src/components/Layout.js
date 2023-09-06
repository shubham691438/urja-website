import React from "react"
import Navbar from "./Navbar"
import BottomNav from "./BootomNav"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
      <>
          <Navbar/>
          <Outlet/>
          <BottomNav/>
      </>
    )
  }
  
  export default Layout