import React from "react"
import Home from "../pages/Home"
import About from "../pages/About"
import Accommodation from "../pages/Accommodation"
import Error from "../pages/Error"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Router() {

    return (
        <BrowserRouter>
            <Header />
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/fiche-logement/:id" element={<Accommodation />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}