//Modules
import React from 'react'
import { Outlet } from 'react-router-dom'
//Components
import NavBar from "./NavBar/NavBar"
import FootNote from "./FootNote/FootNote"
//Css
import "./root.css"

function Root() {

  return (
    <>
      <NavBar />
        <Outlet />
      <FootNote />
    </>
  )
}

export default Root
