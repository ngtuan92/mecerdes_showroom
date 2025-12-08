import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CarProgressLoading from "./components/all-components/CarProgressLoading";
const HomePage = lazy(() => import("./pages/user-pages/Home/HomePage"));
const Login = lazy(() => import("./pages/user-pages/Auth/Login"));
const Signup = lazy(() => import("./pages/user-pages/Auth/Signup"));
const AboutDetail = lazy(() => import("./pages/user-pages/AboutUsDetail/AboutUsDetail"));
const ListCars = lazy(() => import("./pages/user-pages/ListCars/ListCars"));
const ProductDetail = lazy(() => import("./pages/user-pages/ProductDetail/productDetail"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CarProgressLoading />}>
        <Routes>
          <Route path="/dang-nhap" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/dang-ky" element={<Signup />} />
          <Route path="/ve-chung-toi" element={<AboutDetail />} />
          <Route path="/danh-sach-san-pham" element={<ListCars />} />
          <Route path="/san-pham/:name" element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
