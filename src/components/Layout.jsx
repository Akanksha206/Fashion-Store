import React from 'react'
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';




function Layout() {
  return (
    <>
    <Header/>
    <Main/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default Layout;