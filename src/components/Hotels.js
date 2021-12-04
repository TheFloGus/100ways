import React from "react";
import linkIcon from "../images/link-icon.png";
import doglio from "../images/PalazzoDoglio/Doglio-front.webp";
import domus from "../images/Domus/Domus.webp";
import mimi from "../images/Mimi/Mimi.jpg";

function Hotels() {
  return (
    <div className="hotels__wrap">
      <div className="container">
        <div className="hotels">
          <div className="hotels--info">
            <div className="hotels--text">
              <h2 className="hotels--title">Гостиницы</h2>
              <p className="hotels--description">
                Cайт Hotels.com предоставляет большой выбор гостинниц разной
                ценовой категории. Практически все имеют завтрак включенный в
                стоимость номера, бесплатную парковку, бассейн на территории и
                прекрасные виды из окон номеров, ну и конечно бесплатный Wi-fi.
                Сайт booking.com предоставляет возмодность бронирования номеров
                в 271 гостинице, все условия как и сами гостиницы повторяются с
                ранее упомянутым сайтом. Те же отели были представлены и на
                оставшихся двух сайтах. Отели могут быть как 1 так и 5
                звездочные. Общее количество номеров определяется сезоном, в
                самые жаркие моменты бывает трудно найти место в хорошем отеле.
                Могу предположить, что на острове есть отели представляющие
                мировые цепи, одна на сайте их представлено довольно много, и
                поиск является очень затяжным процессом. Номера могут стоить от
                100 до 1000+ долларов.
              </p>
            </div>
            <div className="hotels--map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d98891.94140779614!2d9.097261102581585!3d39.23439979953526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shotels!5e0!3m2!1sen!2sby!4v1638618102354!5m2!1sen!2sby"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                title="map of hotels in Cagliari"
              ></iframe>
            </div>
          </div>
          <div className="hotels--picks">
            <h2 className="hotel--cards-title">
              Гостиницы которые мы выбрали для Вас:
            </h2>
            <div className="hotels--cards">
              <div className="hotel--card">
                <div className="hotel--photo">
                  <img src={doglio} height="300px"></img>
                </div>
                <div className="hotel--text">
                  <h2 className="hotel--title">Hotel Palazzo Doglio</h2>
                  <h3 className="hotel--stars">5 звезд</h3>
                  <p className="hotel--description">
                    У отеля прекрасные отзывы, номера в отелях и прилегающая
                    территория выглядят потрясающе и дают возможность
                    качественного отдыха каждому туристу. <br />
                    Данный отель подходит как для семейного отдыха, так и для
                    отдыха молодой пары. Удобное расположение, большое
                    количество достопримечательностей. В самом отеле хороший
                    ресторан.
                  </p>
                </div>
                <div className="hotel--link">
                  <a
                    href="https://www.booking.com/hotel/it/palazzo-doglio.ru.html?aid=397594&label=gog235jc-1FCAEoggI46AdIM1gDaCWIAQGYAQm4ARfIAQzYAQHoAQH4AQyIAgGoAgO4ApvHrY0GwAIB0gIkMzg0ZDc3NGEtODc1My00OWNlLThhY2ItZDY2NmU1ZjFiOTM12AIG4AIB&sid=186d3d2417183bcf51deab37c46e9126&dest_id=4392057&dest_type=hotel&group_adults=2&group_children=0&hapos=0&hpos=0&lang=ru&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&soz=1&sr_order=popularity&srepoch=1638622172&srpvid=27c05a2d04ec009c&type=total&ucfs=1&lang_click=other;cdl=en-gb;lang_changed=1"
                    target="_blank"
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

              <div className="hotel--card">
                <div className="hotel--photo">
                  <img
                    src={domus}
                    height="300px"
                    width="300px"
                    alt="Domus De Silvia"
                    style={{ objectFit: "cover" }}
                  ></img>
                </div>
                <div className="hotel--text">
                  <h2 className="hotel--title">Domus de Silva</h2>
                  <h3 className="hotel--stars">4 звезды</h3>
                  <p className="hotel--description">
                    Данный отель имеет удобное расположение и множество мест для
                    посещения поблизости. <br />
                    Номера в отеле выполнены в стилистике Италии. Красивые
                    легкие и непринужденные цвета позволяют качественно
                    отдохнуть душой и телом.
                  </p>
                </div>
                <div className="hotel--link">
                  <a
                    href="https://www.booking.com/hotel/it/domus-de-silva.ru.html?aid=397594;label=gog235jc-1FCAEoggI46AdIM1gDaCWIAQGYAQm4ARfIAQzYAQHoAQH4AQyIAgGoAgO4ApvHrY0GwAIB0gIkMzg0ZDc3NGEtODc1My00OWNlLThhY2ItZDY2NmU1ZjFiOTM12AIG4AIB;sid=186d3d2417183bcf51deab37c46e9126;dest_id=3342961;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=0;hpos=0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1638622930;srpvid=c1435ba84c5f005a;type=total;ucfs=1&#hotelTmpl"
                    target="_blank"
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

              <div className="hotel--card">
                <div className="hotel--photo">
                  <img
                    src={mimi}
                    height="300px"
                    width="300px"
                    alt="Domus De Silvia"
                    style={{ objectFit: "cover" }}
                  ></img>
                </div>
                <div className="hotel--text">
                  <h2 className="hotel--title">
                    Suite Mimì Casa vacanza Cagliari
                  </h2>
                  <h3 className="hotel--stars">3 звезды</h3>
                  <p className="hotel--description">
                    Этот отель расположен на расстоянии 4.5 км. от центра, это
                    является неудобным для некоторых отдыхающих, но те кто хотят
                    отдохнуть в спокойной обстановке подальше от центра, этот
                    отель прекрасно подойдет.
                    <br />
                    Номера в отеле самые разнообразные, с прекрасным местным
                    колоритом. .
                  </p>
                </div>
                <div className="hotel--link">
                  <a
                    href="https://www.booking.com/hotel/it/suite-mimi-casa-vacanza-cagliari.ru.html?aid=397594;label=gog235jc-1FCAEoggI46AdIM1gDaCWIAQGYAQm4ARfIAQzYAQHoAQH4AQyIAgGoAgO4ApvHrY0GwAIB0gIkMzg0ZDc3NGEtODc1My00OWNlLThhY2ItZDY2NmU1ZjFiOTM12AIG4AIB;sid=186d3d2417183bcf51deab37c46e9126;dest_id=5443771;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=0;hpos=0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1638623215;srpvid=9a645c37ee8a00c0;type=total;ucfs=1&#hotelTmpl"
                    target="_blank"
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
export default Hotels;
