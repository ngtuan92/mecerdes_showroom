import React from "react";
import Header from "./components/user-components/Header";
import Footer from "./components/user-components/Footer";
import HomePage from "./pages/user-pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/user-pages/Auth/Login";
import Signup from "./pages/user-pages/Auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
