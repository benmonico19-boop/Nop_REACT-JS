import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import GioiThieu from "./pages/Gioithieu";
import Index from "./pages/Home";
import SanPham from "./pages/SanPham";
import Tranggioithieu from "./components/Tranggioithieu";
import Tinntuc from "./components/Tinntuc";
import Detail from "./pages/Detail";
import Shoppingcart from "./pages/Shoppingcart";


export default function App() {

  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/*" element={<Index />} />
        <Route exact path="/index" element={<Index />} />
        <Route path="/gioithieu" element={<Tranggioithieu />} />
        <Route path="/lienhe" element={<h1>Contact</h1>} />
        <Route path="/sanpham" element={<SanPham />} />
        <Route path="/tintuc" element={<Tinntuc />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/giohang" element={<Shoppingcart />} />
      </Routes>

      <Footer />
    </Router>
  );
}