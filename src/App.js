import React from 'react'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio'
import Contact from './Component/Contact/Contact'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'

export default function App() {
let Routes = createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"pprtfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>}
  ]}
])
  return <>
  <RouterProvider router={Routes}/> 
  </>
}
