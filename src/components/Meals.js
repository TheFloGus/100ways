import React from "react";
import mealsStock from "../images/restoraunts/restaurant-stock.jpg";
import linkIcon from "../images/link-icon.png";
import gatto from "../images/restoraunts/Gatto.jpg";
import artan from "../images/restoraunts/Artan.jpg";
import cerere from "../images/restoraunts/Cerere.jpg";

function Meals() {
  return (
    <div className="meal__wrap">
      <div className="container">
        <div className="meals">
          <div className="meals__info">
            <div className="meals__info--text">
              <h2 className="meals__info--title">Питание</h2>
              <p className="meals__info--description">
                В отношении ресторанов, кафе и других заведений, на сайтах нами
                не было найдено информации о их деятельности и ценах. Прописаны
                цены на завтрак в отеле, в случае если он не включен в стоимость
                (стоимость завтрака от 40 бел. руб., крайне мало где он не
                включен в стоимость). Отображение ресторанов в виде
                дополнительной информации к отелю, о том что поблизости такие
                есть.
              </p>
            </div>
            <div className="meals__image">
              <img src={mealsStock} width="550px" alt="stock restaurant"></img>
            </div>
          </div>
          <div className="meals__picked">
            <h2 className="meals__cards--title">Выбранные нами рестораны:</h2>
            <div className="meals__cards">
              <div className="meals__card" data-aos="fade-right">
                <div className="meals__photo">
                  <img
                    src={gatto}
                    height="300px"
                    width="300px"
                    alt="Domus De Silvia"
                    style={{ objectFit: "cover" }}
                  ></img>
                </div>
                <div className="meals__text">
                  <h2 className="meals__title">I1 Gatto</h2>
                  <h3 className="meals__stars">3,5 из 5</h3>
                  <p className="meals__description">
                    Эта пиццерия располагается рядом с Capitol arte
                    contemporanea. В этом месте можно попробовать хорошую пиццу,
                    спагетти и бульон. Это заведение славится аппетитным
                    аффогато и неплохим бисквитом с ванильным кремом. Здесь
                    подают неплохой лимонад. <br />
                    Удобное расположение Il Gatto позволяет легко добраться до
                    него даже в час пик. Множество гостей отмечают, что персонал
                    в этом месте креативный.
                  </p>
                </div>
                <div className="meals__link">
                  <a
                    href="https://www.tripadvisor.ru/Restaurant_Review-g187881-d1319830-Reviews-Il_Gatto-Cagliari_Province_of_Cagliari_Sardinia.html"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <img
                      src={linkIcon}
                      width="100px"
                      height="100px"
                      alt="link-icon"
                    ></img>
                  </a>
                </div>
              </div>

              <div className="meals__card" data-aos="fade-right">
                <div className="meals__photo">
                  <img
                    src={artan}
                    height="300px"
                    width="300px"
                    alt="Domus De Silvia"
                    style={{ objectFit: "cover" }}
                  ></img>
                </div>
                <div className="meals__text">
                  <h2 className="meals__title">Ristorante da Artan</h2>
                  <h3 className="meals__stars">4,5 из 5</h3>
                  <p className="meals__description">
                    В этом ресторане есть несколько столиков на улице на одной
                    из главных улиц Кальяри, поэтому ресторан предлагает больше
                    столов. Меню предлагает несколько хороших опций; Например
                    хорошее блюдо из осьминога или огромный стейк из лошади.
                    Обслуживание также является превосходным.
                  </p>
                </div>
                <div className="meals__link">
                  <a
                    href="https://www.tripadvisor.ru/Restaurant_Review-g187881-d11759424-Reviews-Ristorante_da_Artan-Cagliari_Province_of_Cagliari_Sardinia.html"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <img
                      src={linkIcon}
                      width="100px"
                      height="100px"
                      alt="link-icon"
                    ></img>
                  </a>
                </div>
              </div>

              <div className="meals__card" data-aos="fade-right">
                <div className="meals__photo">
                  <img
                    src={cerere}
                    height="300px"
                    width="300px"
                    alt="Domus De Silvia"
                    style={{ objectFit: "cover" }}
                  ></img>
                </div>
                <div className="meals__text">
                  <h2 className="meals__title">Pizzeria Cerere</h2>
                  <h3 className="meals__stars">5 из 5</h3>
                  <p className="meals__description">
                    Очень вкусная пицца и очень дружелюбный персонал. Однако
                    стоит резервировать место заранее, ибо вечерами там бывает
                    не протолкнуться. Отлинчый вариант для любителей пиццы и
                    итальянской кухни. Также пристуствет меню для вегатерианцев.
                  </p>
                </div>
                <div className="meals__link">
                  <a
                    href="https://www.tripadvisor.ru/Restaurant_Review-g187881-d13546797-Reviews-Pizzeria_Cerere-Cagliari_Province_of_Cagliari_Sardinia.html"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <img
                      src={linkIcon}
                      width="100px"
                      height="100px"
                      alt="link-icon"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Meals;
