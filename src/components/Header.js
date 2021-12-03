import React, { Suspense, useState, useEffect } from "react";
import logo from "../images/logo.png";
import name from "../images/name.png";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { debounce } from "../utilities/helper";
const Home = React.lazy(() => import("./Home"));

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 200) ||
        currentScrollPos < 100
    );
    setPrevScrollPos(currentScrollPos);
  }, 10);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <div className="header__wrap" style={{ top: visible ? "0" : "-230px" }}>
        <div className="container">
          <div className="header">
            <Link to="/home" className="nav__link">
              <img className="logo" src={logo} alt="100ways logo"></img>
			  <img className="logo--name" src={name} alt="100ways name in logo"></img>
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
          <Route
            path="/home"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
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
