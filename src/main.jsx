import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import ShortKurtis from './components/Women/ShortKurtis'
import TeesandCrops from './components/Women/TeesandCrops'
import Sarees from './components/Women/Sarees'
import Jeans from './components/Women/Jeans'
import Shorts from './components/Women/Shorts'
import CoordSets from './components/Women/CoordSets'
import Chequered from './components/Men/Chequered'
import Colour from './components/Men/Colour'
import Floral from './components/Men/Floral'
import Oversized from './components/Men/Oversized'
import Sauve from './components/Men/Sauve'
import Stripped from './components/Men/Stripped'
import Coordinates from './components/Kids/Coordinates'
import Joggers from './components/Kids/Joggers'
import Rompers from './components/Kids/Rompers'
import Shirts from './components/Kids/Shirts'
import Tees from './components/Kids/Tees'
import Bags from './components/Accessories/Bags'
import Jewellery from './components/Accessories/Jewellery'
import Shoes from './components/Accessories/Shoes'
import Watches from './components/Accessories/Watches'
const router =createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}/>
    {/* <Route path='' element={<Header/>}/>
    <Route path ='' element={<Footer/>}/> */}
    <Route path='ShortKurtis' element={<ShortKurtis/>}/>
    <Route path='TeesandCrops' element={<TeesandCrops/>}/>
    <Route path='Sarees' element={<Sarees/>}/>
    <Route path='Jeans' element={<Jeans/>}/>
    <Route path='Shorts' element={<Shorts/>}/>
    <Route path='CoordSets' element={<CoordSets/>}/>
    <Route path='Chequered' element={<Chequered/>}/>
    <Route path='Colour' element={<Colour/>}/>
    <Route path='Floral' element={<Floral/>}/>
    <Route path='Oversized' element={<Oversized/>}/>
    <Route path='Sauve' element={<Sauve/>}/>
    <Route path='Stripped' element={<Stripped/>}/>
    <Route path='Coordinates' element={<Coordinates/>}/>
    <Route path='Joggers' element={<Joggers/>}/>
    <Route path='Rompers' element={<Rompers/>}/>
    <Route path='Shirts' element={<Shirts/>}/>
    <Route path='Tees' element={<Tees/>}/>
    <Route path='Bags' element={<Bags/>}/>
    <Route path='Jewellery' element={<Jewellery/>}/>
    <Route path='Shoes' element={<Shoes/>}/>
    <Route path='Watches' element={<Watches/>}/>
    
    </>
  )
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
