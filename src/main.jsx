import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'

import Layout from './components/Layout'
import Feed from './components/Feed/Feed'
import ShortKurtis from './components/Women/ShortKurtis'
import KurtiDetails from './components/ProductDetails/WomenProducts/KurtiDetails'

import TeesandCrops from './components/Women/TeesandCrops'
import TeesandCropsDetails from './components/ProductDetails/WomenProducts/TeesandCropsDetails'

import Sarees from './components/Women/Sarees'
import SareesDetails from './components/ProductDetails/WomenProducts/SareesDetails'

import Jeans from './components/Women/Jeans'
import JeansDetails from './components/ProductDetails/WomenProducts/JeansDetails'

import Shorts from './components/Women/Shorts'
import ShortsDetails from './components/ProductDetails/WomenProducts/ShortsDetails'

import CoordSets from './components/Women/CoordSets'
import CoordSetsDetails from './components/ProductDetails/WomenProducts/CoordSetsDetails'

import Chequered from './components/Men/Chequered'
import ChequeredDetails from './components/ProductDetails/MenDetails/ChequeredDetails'

import Colour from './components/Men/Colour'
import ColourDetails from './components/ProductDetails/MenDetails/ColourDetails'

import Floral from './components/Men/Floral'
import FloralDetails from './components/ProductDetails/MenDetails/FloralDetails'

import Oversized from './components/Men/Oversized'
import OversizedDetails from './components/ProductDetails/MenDetails/OversizedDetails'

import Sauve from './components/Men/Sauve'
import SauveDetails from './components/ProductDetails/MenDetails/SauveDetails'

import Stripped from './components/Men/Stripped'
import StrippedDetails from './components/ProductDetails/MenDetails/StrippedDetails'

import Coordinates from './components/Kids/Coordinates'
import CoordinatesDetails from './components/ProductDetails/KidsDetails/CoordinatesDetails'

import Joggers from './components/Kids/Joggers'
import JoggersDetails from './components/ProductDetails/KidsDetails/JoggersDetails'

import Rompers from './components/Kids/Rompers'
import RompersDetails from './components/ProductDetails/KidsDetails/RompersDetails'

import Shirts from './components/Kids/Shirts'
import ShirtsDetails from './components/ProductDetails/KidsDetails/ShirtsDetails'

import Tees from './components/Kids/Tees'
import TeesDetails from './components/ProductDetails/KidsDetails/TeesDetails'

import Bags from './components/Accessories/Bags'
import BagsDetails from './components/ProductDetails/AccessoriesDetails/BagsDetails'

import Jewellery from './components/Accessories/Jewellery'
import JewelleryDetails from './components/ProductDetails/AccessoriesDetails/JewelleryDetails'

import Shoes from './components/Accessories/Shoes'
import ShoesDetails from './components/ProductDetails/AccessoriesDetails/ShoesDetails'

import Watches from './components/Accessories/Watches'
import WatchesDetails from './components/ProductDetails/AccessoriesDetails/WatchesDetails'

import LoginPage from './components/Icons/LoginPage'
import WishlistIcon from './components/Icons/WishlistIcon'
import CartIcon from './components/Icons/CartIcon'
import NotificationIcon from './components/Icons/NotificationIcon'

const router =createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Feed/>}/>

    <Route path='ShortKurtis' element={<ShortKurtis/>}/>
    <Route path="/product-details/:id" element={<KurtiDetails />} />

    <Route path='TeesandCrops' element={<TeesandCrops/>}/>
    <Route path="/Tees-details/:id" element={<TeesandCropsDetails/>}/>

    <Route path='Sarees' element={<Sarees/>}/>
    <Route path='/sarees-details/:id' element={<SareesDetails/>}/>

    <Route path='Jeans' element={<Jeans/>}/>
    <Route path='/jeans-details/:id' element={<JeansDetails/>}/>

    <Route path='Shorts' element={<Shorts/>}/>
    <Route path='/shorts-details/:id' element={<ShortsDetails/>}/>

    <Route path='CoordSets' element={<CoordSets/>}/>
    <Route path='/coordSet-details/:id' element={<CoordSetsDetails/>}/>

    <Route path='Chequered' element={<Chequered/>}/>
    <Route path='/chequered-details/:id' element={<ChequeredDetails/>}/>

    <Route path='Colour' element={<Colour/>}/>
    <Route path='/colour-details/:id' element={<ColourDetails/>}/>


    <Route path='Floral' element={<Floral/>}/>
    <Route path='/floral-details/:id' element={<FloralDetails/>}/>

    <Route path='Oversized' element={<Oversized/>}/>
    <Route path='/oversized-details/:id' element={<OversizedDetails/>}/>

    <Route path='Sauve' element={<Sauve/>}/>
    <Route path='/sauve-details/:id' element={<SauveDetails/>}/>


    <Route path='Stripped' element={<Stripped/>}/>
    <Route path='/stripped-details/:id' element={<StrippedDetails/>}/>

    <Route path='Coordinates' element={<Coordinates/>}/>
    <Route path='/coordinates-details/:id' element={<CoordinatesDetails/>}/>

    <Route path='Joggers' element={<Joggers/>}/>
    <Route path='/joggers-details/:id' element={<JoggersDetails/>}/>

    <Route path='Rompers' element={<Rompers/>}/>
    <Route path='/rompers-details/:id' element={<RompersDetails/>}/>

    <Route path='Shirts' element={<Shirts/>}/>
    <Route path='/shirts-details/:id' element={<ShirtsDetails/>}/>

    <Route path='Tees' element={<Tees/>}/>
    <Route path='/teees-details/:id' element={<TeesDetails/>}/>

    <Route path='Bags' element={<Bags/>}/>
    <Route path='/bags-details/:id' element={<BagsDetails/>}/>

    <Route path='Jewellery' element={<Jewellery/>}/>
    <Route path='/jewellery-details/:id' element={<JewelleryDetails/>}/>

    <Route path='Shoes' element={<Shoes/>}/>
    <Route path='/shoes-details/:id' element={<ShoesDetails/>}/>

    <Route path='Watches' element={<Watches/>}/>
    <Route path='/watches-details/:id' element={<WatchesDetails/>}/>

    <Route path='LoginPage' element={<LoginPage/>}/>
    <Route path ='Wishlist' element={<WishlistIcon />}/>
    <Route path ='CartIcon' element={<CartIcon/>}/>
    <Route path ='Notification' element={<NotificationIcon/>}/>
   
    </Route>
    </>
  )
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
