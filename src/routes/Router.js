import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Nav from '../components/Nav'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>{/*necesario para poder preparar las rutas*/}
            <Route element={<Nav />} >  {/*Elementos con navbar */}
                <Route path="/" element={<Home />} />
            </Route>
                {/*Elementos sin navbar */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router