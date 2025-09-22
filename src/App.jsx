import React from "react";
import HomePage from "./pages/user-pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/user-pages/Auth/Login";
import Signup from "./pages/user-pages/Auth/Signup";
import AboutDetail from "./pages/user-pages/AboutUsDetail/AboutUsDetail";
import ListCars from "./pages/user-pages/ListCars/Mercedes-benz/ListCars";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<AboutDetail />} />
        <Route path="/listcars" element={<ListCars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
