import React, { Suspense, useState, useEffect } from "react";
import logo from "../images/logo.png";
import name from "../images/name.png";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { debounce } from "../utilities/helper";
import { SpinnerRoundFilled } from "spinners-react";
const Home = React.lazy(() => import("./Home"));
const Hotels = React.lazy(() => import("./Hotels"));

function Header() {
  const [small, setSmall] = useState(false);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setSmall(
      currentScrollPos > 10
    );
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div className="header__wrap">
        <div className="container">
          <div className={small ? "header--small show" : "header--small"}>
            <div className="nav__links--small">
			<Link to="/home" className="nav__link--small">
                <div className="nav__button--small">Домой</div>
              </Link>
              <Link to="/hotels" className="nav__link--small">
                <div className="nav__button--small">Отели</div>
              </Link>
              <Link to="/meals" className="nav__link--small">
                <div className="nav__button--small">Питание</div>
              </Link>
              <Link to="/transportation" className="nav__link--small">
                <div className="nav__button--small">Транспорт</div>
              </Link>
              <Link to="/landmarks" className="nav__link--small">
                <div className="nav__button--small">Что посмотреть</div>
              </Link>
              <Link to="/tour" className="nav__link--small">
                <div className="nav__button--small">Тур</div>
              </Link>
              <Link to="/ticket" className="nav__link--small">
                <div className="nav__button--small">Путевка</div>
              </Link>
              <Link to="/checking" className="nav__link--small">
                <div className="nav__button--small">Заселение</div>
              </Link>
              <Link to="/technologies" className="nav__link--small">
                <div className="nav__button--small">Технологии</div>
              </Link>
              <Link to="/about" className="nav__link--small">
                <div className="nav__button--small">О Фирме</div>
              </Link>
              <Link to="/reviews" className="nav__link--small">
                <div className="nav__button--small">Отзывы</div>
              </Link>
            </div>
          </div>
          <div className={small ? "header" : "header show"}>
            <Link to="/home" className="nav__link">
              <img className="logo" src={logo} alt="100ways logo"></img>
              <img
                className="logo--name"
                src={name}
                alt="100ways name in logo"
              ></img>
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
              <Suspense
                fallback={
                  <div className="center-spinner">
                    <SpinnerRoundFilled
                      size={50}
                      thickness={100}
                      speed={100}
                      color="#bf85fe"
                    />
                  </div>
                }
              >
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/hotels"
            element={
              <Suspense
                fallback={
                  <div className="center-spinner">
                    <SpinnerRoundFilled
                      size={50}
                      thickness={100}
                      speed={100}
                      color="#bf85fe"
                    />
                  </div>
                }
              >
                <Hotels />
              </Suspense>
            }
          />
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
          <div className="footer">Brednev Eugene 2021</div>
        </div>
      </div>
    </>
  );
}
export default Header;
