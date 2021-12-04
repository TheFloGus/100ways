import React, { Suspense, useState, useEffect } from "react";
import logo from "../images/logo.png";
import name from "../images/name.png";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { debounce } from "../utilities/helper";
import { SpinnerRoundFilled } from "spinners-react";
const Home = React.lazy(() => import("./Home"));
const Hotels = React.lazy(() => import("./Hotels"));
const Meals = React.lazy(() => import("./Meals"));

function Header() {
  const [small, setSmall] = useState(false);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setSmall(currentScrollPos > 10);
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
              <NavLink to="/home" className="nav__link--small">
                <div className="nav__button--small">Домой</div>
              </NavLink>
              <NavLink to="/hotels" className="nav__link--small">
                <div className="nav__button--small">Отели</div>
              </NavLink>
              <NavLink to="/meals" className="nav__link--small">
                <div className="nav__button--small">Питание</div>
              </NavLink>
              <NavLink to="/transportation" className="nav__link--small">
                <div className="nav__button--small">Транспорт</div>
              </NavLink>
              <NavLink to="/landmarks" className="nav__link--small">
                <div className="nav__button--small">Что посмотреть</div>
              </NavLink>
              <NavLink to="/tour" className="nav__link--small">
                <div className="nav__button--small">Тур</div>
              </NavLink>
              <NavLink to="/ticket" className="nav__link--small">
                <div className="nav__button--small">Путевка</div>
              </NavLink>
              <NavLink to="/checking" className="nav__link--small">
                <div className="nav__button--small">Заселение</div>
              </NavLink>
              <NavLink to="/technologies" className="nav__link--small">
                <div className="nav__button--small">Технологии</div>
              </NavLink>
              <NavLink to="/about" className="nav__link--small">
                <div className="nav__button--small">О Фирме</div>
              </NavLink>
              <NavLink to="/reviews" className="nav__link--small">
                <div className="nav__button--small">Отзывы</div>
              </NavLink>
            </div>
          </div>
          <div className={small ? "header" : "header show"}>
            <NavLink to="/home" className="nav__link">
              <img className="logo" src={logo} alt="100ways logo"></img>
              <img
                className="logo--name"
                src={name}
                alt="100ways name in logo"
              ></img>
            </NavLink>
            <div className="nav__links">
              <div className="nav__buttons--group">
                <NavLink to="/hotels" className="nav__link">
                  <div className="nav__button">Отели</div>
                </NavLink>
                <NavLink to="/meals" className="nav__link">
                  <div className="nav__button">Питание</div>
                </NavLink>
                <NavLink to="/transportation" className="nav__link">
                  <div className="nav__button">Транспорт</div>
                </NavLink>
                <NavLink to="/landmarks" className="nav__link">
                  <div className="nav__button">Что посмотреть</div>
                </NavLink>
                <NavLink to="/tour" className="nav__link">
                  <div className="nav__button">Тур</div>
                </NavLink>
              </div>
              <div className="nav__buttons--group">
                <NavLink to="/ticket" className="nav__link">
                  <div className="nav__button">Путевка</div>
                </NavLink>
                <NavLink to="/checking" className="nav__link">
                  <div className="nav__button">Заселение</div>
                </NavLink>
                <NavLink to="/technologies" className="nav__link">
                  <div className="nav__button">Технологии</div>
                </NavLink>
                <NavLink to="/about" className="nav__link">
                  <div className="nav__button">О Фирме</div>
                </NavLink>
                <NavLink to="/reviews" className="nav__link">
                  <div className="nav__button">Отзывы</div>
                </NavLink>
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
          <Route
            path="/meals"
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
                <Meals />
              </Suspense>
            }
          />
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
