import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <header>
        <div className="row frame-header">
          <div className="row cch">
            <div className="col-md-4 text-center">HOTLINE: 0909345678</div>
            <div className="col-md-4 text-center">ĐĂNG KÝ</div>
            <div className="col-md-4 text-center">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => setShowLogin(true)} // bật form khi click
              >
                ĐĂNG NHẬP
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <div className="container bg-warning">
        <div className="row">
          <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                MNC
              </a>
              <button
                className="navbar-toggler"
                data-bs-target="#mynavbar"
                data-bs-toggle="collapse"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/index">Trang chủ</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sanpham">Sản phẩm</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/gioithieu">Giới thiệu</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tintuc">Tin tức</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/giohang">Giỏ hàng</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/lienhe">Liên hệ</Link>
                  </li>
                </ul>
                <form className="btn d-flex">
                  <input
                    className="form-control me-2"
                    placeholder="Search"
                    type="text"
                  />
                  <button className="btn btn-primary" type="button">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* 🔹 Hiển thị form đăng nhập */}
      <LoginForm show={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}