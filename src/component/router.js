import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about";
import Topics from "./topics";

export default function RoutesPage() {

    return(
        <>
        <Router>
        <Routes>
            <Route path="/" />
            <Route path="/About" element= { <About /> } />
            <Route path="/Topics" element={ <Topics /> } />
        </Routes>
        </Router>
        </>
    )
}