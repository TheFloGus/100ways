import React from "react";
import logo from "../images/full_logo.png";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header__wrap">
        <div className="container">
          <div className="header">
            <Link to="/home" className="nav__link">
              <img className="logo" src={logo} alt="100ways logo"></img>
            </Link>
            <div className="nav__links">
              <div className="nav__buttons--group">
                <Link to="/hotels" className="nav__link">
                  <div className="nav__button">Отели</div>
                </Link>
                <Link to="/meals" className="nav__link">
                  <div className="nav__button">Питание</div>
                </Link>
                <Link to="/transportation" className="nav__link">
                  <div className="nav__button">Транспорт</div>
                </Link>
                <Link to="/landmarks" className="nav__link">
                  <div className="nav__button">Что посмотреть</div>
                </Link>
                <Link to="/tour" className="nav__link">
                  <div className="nav__button">Тур</div>
                </Link>
              </div>
              <div className="nav__buttons--group">
                <Link to="/ticket" className="nav__link">
                  <div className="nav__button">Путевка</div>
                </Link>
                <Link to="/checking" className="nav__link">
                  <div className="nav__button">Заселение</div>
                </Link>
                <Link to="/technologies" className="nav__link">
                  <div className="nav__button">Технологии</div>
                </Link>
                <Link to="/about" className="nav__link">
                  <div className="nav__button">О Фирме</div>
                </Link>
                <Link to="/reviews" className="nav__link">
                  <div className="nav__button">Отзывы</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main__pages">
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          {/* <Route path="/home" element={<Navigate to="/home" />} /> */}
          <Route path="/hotels" element={<Navigate to="/home" />} />
          <Route path="/meals" element={<Navigate to="/home" />} />
          <Route path="/transportation" element={<Navigate to="/home" />} />
          <Route path="/landmarks" element={<Navigate to="/home" />} />
          <Route path="/tour" element={<Navigate to="/home" />} />
          <Route path="/ticket" element={<Navigate to="/home" />} />
          <Route path="/checking" element={<Navigate to="/home" />} />
          <Route path="/technologies" element={<Navigate to="/home" />} />
          <Route path="/about" element={<Navigate to="/home" />} />
          <Route path="/reviews" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      <div className="footer__wrap">
        <div className="container">
          <div className="footer">My name</div>
        </div>
      </div>
    </>
  );
}
export default Header;
