import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar--secondary navbar-expand-lg navbar-light bg-white border-bottom d-none d-md-block">
        <div className="container">
          <div className="navbar-collapse justify-content-between collapse show">
            <div className="d-flex justify-content-end justify-content-lg-start pt-1 pt-md-0 order-2 order-lg-1">
              <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-uppercase fw-bold" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      en
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark bg-white" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><a className="dropdown-item" href="/">español</a></li>
                      <li><a className="dropdown-item" href="/">中文</a></li>
                      <li><a className="dropdown-item" href="/">日本語</a></li>
                      <li><a className="dropdown-item" href="/">한국어</a></li>
                      <li><a className="dropdown-item" href="/">русский</a></li>
                      <li><a className="dropdown-item" href="/">Türkçe</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="up-nav py-1 d-flex flex-wrap align-items-center justify-content-between justify-content-lg-end order-1 order-lg-2">
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item"><a href="/" target="_blank" rel="r" className="text-small nav-link pl-0 pl-lg-2 pr-1 font-weight-bold">Lightpaper</a></li>

                <li className="nav-item"><a href="/" target="_blank" rel="" className="text-small nav-link pl-0 pl-lg-2 pr-1 font-weight-bold">Whitepaper</a></li>
                <li className="nav-item"><a href="/" target="_blank" rel="" className="text-small nav-link px-2 mr-2 font-weight-bold">Wiki</a></li>
              </ul>
              <ul className="list-social-links navbar-nav d-none d-lg-flex flex-row">
                <li><a href="/" className="p-2 fs-6"><BsGithub /></a></li>
                <li><a href="/" className="p-2 fs-6"><FaDiscord /></a></li>
                <li><a href="/" className="p-2 fs-6"><BsTwitter /></a></li>
                <li><a href="/" target="_blank" rel="" className="text-dark font-weight-bold btn-support">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light navbar-below">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img className="img-fluid"
              src="https://polkadot.network/assets/img/logo-polkadot.svg?v=ea608e625d"
              width={180}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to='/technology' 
                  style={{duration:'0.269373s'}}
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/community">
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/build">
                  Build
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
