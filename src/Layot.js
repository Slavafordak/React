import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
<div className="bg-zinc-800 h-screen">
    <header className="p-3 text-white bg-zinc-900">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="Home" className="nav-link px-2 text-white">Главная</a></li>
            <li><a href="Features" className="nav-link px-2 text-white">Features</a></li>
            <li><a href="Pricing" className="nav-link px-2 text-white">Pricing</a></li>
            <li><a href="FAQ" className="nav-link px-2 text-white">FAQ</a></li>
            <li><a href="About" className="nav-link px-2 text-white">О нас</a></li>
          </ul>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
          </form>
          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">Войти</button>
            <button type="button" className="btn btn-warning">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </header>
  </div>
  )
}

export default Header
