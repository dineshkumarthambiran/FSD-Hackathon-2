import React from 'react'
import { Card, CardGroup, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import Cards from './Cards/Cards'
import Cards2 from './Cards/Cards2'
import Footer from './Footer'
import  { DNavbar } from './Sidenav/DNavbar'
import SideNavbar from './Sidenav/Sidenav'

const Dashboard = () => {
 
  
 return (
    <div style={{background:'white'}}>
            <DNavbar />
            {/* <Cards /> */}
            <Cards2 />
            <Footer />

    </div>
  )
}

export default Dashboard