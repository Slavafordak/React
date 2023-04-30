import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
      <header className="p-3 text-white bg-zinc-900 ">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 text-white fs-5">Главная</a></li>
              <li><a href="/Torgi" className="nav-link px-2 text-white fs-5">Торги</a></li>
            </ul>
            <div className="text-end">
            <a className="btn btn-outline-light me-2" href="Login" role="button">Войти</a>
            <a className="btn btn-warning" href='Registration' role="button">Зарегистрироваться</a>
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  export default Header
