import React from "react";
import flights1 from "../images/transport/flights1.png";
import flights2 from "../images/transport/flights2.png";
import auto1 from "../images/transport/auto1.png";
import auto2 from "../images/transport/auto2.png";

function Transport() {
  return (
    <div className="transport__wrap">
      <div className="container">
        <div className="transport">
          <div className="transport__aero">
            <div className="transport__aero--text">
              <h3 className="transport__aero--title">
                Иноформация об авиатранспорте
              </h3>
              <p className="transport__aero--description">
                На данный момент, по выбранному нами направлению перелет
                невозможен без пересадки. Самым логичным, является пересадка в
                Стамбуле, так как время полета до пункта пересадки и после
                примерно по 3 часа, что не дает устать семейным парам с детьми.
                Однако существуют проблемы с возможной не стыковкой рейсов и
                долгим ожиданием в пункте пересадки. На первые дни лета 2022
                года имеется 4 рейса(на фото 1)
                <br />
                <br />А уже из Стамбула в Италию - 7 (на фото 2)
              </p>
            </div>
            <div className="transport__aero--photo">
              <img src={flights1} width="600px" alt="flights to Istanbul"></img>
              <p>Фото 1</p>
              <br />
              <img src={flights2} width="600px" alt="fligths to Italy"></img>
              <p>Фото 2</p>
            </div>
          </div>
          <div className="transport__auto">
            <div className="transport__auto--photo">
              <img src={auto1} width="600px" alt="auto in airport"></img>
              <br />
              <img src={auto2} width="600px" alt="examples of cars"></img>
            </div>
            <div className="transport__auto--text">
              <h3 className="transport__auto--title">
                Иноформация об автотранспорте
              </h3>
              <p className="transport__auto--description">
                самую приемлемую информацию, мы нашли на сайте booking.com.
                Компании предоставляют возможность взять машину в аренду на 12
                дней, при этом не ограничен пробег и машину необходимо вернуть с
                тем же количеством топлива что и взяли. Модельный ряд широкий от
                универсалов до моделей e-class. Стоимость проката от 350 евро.
                Удобно что машину можно забрать сразу от терминала.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Transport;
