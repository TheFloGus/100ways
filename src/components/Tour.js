import React from "react";
import flightsList from "../images/Tour/flights-list.png";
import flightsPrice from "../images/Tour/flights-price.png";
import hotel from "../images/Tour/hotel.jpg";
import devilsPeak from "../images/Tour/devilsPeak.jpg";
import segway from "../images/Tour/segway.jpg";

function Tour() {
  return (
    <>
      <div className="container">
        <div className="tour">
          <div className="tour__blocks">
            <div className="tour__block" data-aos="fade-right">
              <div className="tour__block--title">
                <h2>Общая информация о туре</h2>
              </div>
              <div className="tour__block--content">
                <p className="tour__block--description">
                  Италия, г. Кальяри, для семьи с двумя детьми в летний период
                  на 14 дней.
                  <br />
                  <br />
                  Кальяри(Cagliari) – это особенный город, равного которому не
                  найти! Здесь сохранена своя, особая красота – совсем не такая,
                  как в городах с многочисленными высотными отелями, офисами и
                  супермаркетами. Именно поэтому сюда ежегодно устремляются
                  толпы туристов со всех уголков Европы!
                  <br />
                  <br />
                  <b>
                    Карту с доступными отелями, ресторанами и
                    достопримечательностями вы можете наблюдать справа
                  </b>
                </p>
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=12p53OimIbDkQst1uOUlRbiutIyYg4eaW&ehbc=2E312F"
                  width="600"
                  height="400"
                  title="tour map"
                ></iframe>
              </div>
            </div>

            <div className="tour__block" data-aos="fade-right">
              <div className="tour__block--title">
                <h2>Перелет</h2>
              </div>
              <div className="tour__block--content">
                <p className="tour__block--description">
                  Вылет осуществляется из аэропорта в Минске “Национальный
                  аэропорт Минск”. На скриншотах предоставлена точная информация
                  о времени вылета и прилета, времени в пути, наименовании
                  самолета от авиакомпании, допустимом весе багажа. Был выбран
                  эконом класс. Осуществляется 1 пересадка в Стамбуле как на
                  пути туда, так и обратно. 4 пассажира, два взрослых и один
                  ребенок. Все детали представлены на скриншотах (время, самолет
                  какой компании и стоимость)
                  <br />
                  <br />
                  Некоторые пересадки занимают 13 часов, поэтому туристы могут
                  воспользоваться услугами гостиницы в самом аэропорту для того
                  чтобы отдохнуть (не включено в стоимость). Итоговая стоимость
                  составляет:
                  <br />
                  <br />
                  <b style={{ fontSize: "30px", color: "darkBlue" }}>
                    2113,20 долларов
                  </b>
                </p>
                <div>
                  <img src={flightsList} width="600px" alt="flights list"></img>
                  <br />
                  <p>Маршрут с пересадками</p>
                  <br />
                  <img
                    src={flightsPrice}
                    width="600px"
                    alt="flights prices"
                  ></img>
                  <br />
                  <p>Общая стоимость перелета с компанией Turkish Airlines</p>
                </div>
              </div>
            </div>

            <div className="tour__block" data-aos="fade-right">
              <div className="tour__block--title">
                <h2>Проживание</h2>
              </div>
              <div className="tour__block--content">
                <p className="tour__block--description">
                  Для проживания был выбран отель{" "}
                  <a
                    href="https://www.booking.com/hotel/it/coliving-spacebility.ru.html?aid=356980;label=gog235jc-1DCAsocUIUY29saXZpbmctc3BhY2ViaWxpdHlIM1gDaCWIAQGYASG4ARfIAQzYAQPoAQGIAgGoAgO4AoP9so0GwAIB0gIkMzAzMDRkZmYtZDRkOC00M2RlLThjOTEtZTU0ZDY0YjVmNGU42AIE4AIB;sid=186d3d2417183bcf51deab37c46e9126;dist=0&keep_landing=1&sb_price_type=total&type=total&"
                    style={{ fontSize: "25px", color: "darkBlue" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Spacebility City
                  </a>{" "}
                  за хорошие отзывы и прекрасное расположение. Данный отель
                  предоставляет возможность бесплатного трансфера от и до
                  аэропорта. Для семьи из 4 человек подходит полулюкс с большой
                  кроватью и двуспальным диваном-кроватью. Завтрак включен в
                  стоимость. Имеется бесплатный Wi-fi на всей территории, и
                  бесплатная парковка если захотите взять автомобиль. Общая
                  стоимость составляет:
                  <br />
                  <br />
                  <b style={{ fontSize: "30px", color: "darkBlue" }}>
                    2942 бел. руб.
                  </b>
                </p>
                <div>
                  <a
                    href="https://www.booking.com/hotel/it/coliving-spacebility.ru.html?aid=356980;label=gog235jc-1DCAsocUIUY29saXZpbmctc3BhY2ViaWxpdHlIM1gDaCWIAQGYASG4ARfIAQzYAQPoAQGIAgGoAgO4AoP9so0GwAIB0gIkMzAzMDRkZmYtZDRkOC00M2RlLThjOTEtZTU0ZDY0YjVmNGU42AIE4AIB;sid=186d3d2417183bcf51deab37c46e9126;dist=0&keep_landing=1&sb_price_type=total&type=total&"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={hotel} width="600px" alt="hotel room"></img>
                  </a>
                  <br />
                  <p>Фото комнаты отеля</p>
                  <br />
                </div>
              </div>
            </div>

            <div className="tour__block" data-aos="fade-right">
              <div className="tour__block--title">
                <h2>Экскурсии и развлечения</h2>
              </div>
              <div className="tour__block--content">
                <p className="tour__block--description">
                  <a
                    href="https://www.booking.com/attractions/it/prini6cprbve-hiking-trip-to-the-devils-saddle.html?aid=356980&label=gog235jc-1BCAsocUIUY29saXZpbmctc3BhY2ViaWxpdHlIM1gDaCWIAQGYASG4ARfIAQzYAQHoAQGIAgGoAgO4AoP9so0GwAIB0gIkMzAzMDRkZmYtZDRkOC00M2RlLThjOTEtZTU0ZDY0YjVmNGU42AIF4AIB&ufi=-112463&date=2021-12-07&start_time=15%3A00"
                    style={{ fontSize: "25px", color: "darkBlue" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Седло Дьявола
                  </a>{" "}
                  — пеший поход, занимает 3 часа и дарит незабываемые ощущения и
                  множество фото в красивейших местах. Экскурсия немного
                  выматывающая, но оно того стоит. Чем привлекателен тур: Скала
                  Седло Дьявола — символ Кальяри, Великолепный вид на Залив
                  Ангелов,Знакомство с историей города в сопровождении гида.
                  Стоимость -{" "}
                  <b style={{ fontSize: "20px", color: "darkBlue" }}>
                    101,96 бел. руб.
                  </b>{" "}
                  Место посещения представлено на фото.
                  <br />
                  <br />
                </p>
                <div>
                  <a
                    href="https://www.booking.com/attractions/it/prini6cprbve-hiking-trip-to-the-devils-saddle.html?aid=356980&label=gog235jc-1BCAsocUIUY29saXZpbmctc3BhY2ViaWxpdHlIM1gDaCWIAQGYASG4ARfIAQzYAQHoAQGIAgGoAgO4AoP9so0GwAIB0gIkMzAzMDRkZmYtZDRkOC00M2RlLThjOTEtZTU0ZDY0YjVmNGU42AIF4AIB&ufi=-112463&date=2021-12-07&start_time=15%3A00"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={devilsPeak} width="600px" alt="hotel room"></img>
                  </a>
                </div>
              </div>
              <div className="tour__block--line" />
              <div className="tour__block--content">
                <p className="tour__block--description">
                  Кальяри ― <a
                    href="https://www.tripadvisor.ru/Attraction_Review-g187881-d1931276-Reviews-NewWaySardinia-Cagliari_Province_of_Cagliari_Sardinia.html"
                    style={{ fontSize: "25px", color: "darkBlue" }}
                    target="_blank"
                    rel="noreferrer"
                  >экскурсия на сегвее.</a> Эта экскурсия будет интересна
                  как взрослым так и детям. Продолжительность - 2 часа 30 минут.
                  Стоимость -{" "}
                  <b style={{ fontSize: "20px", color: "darkBlue" }}>
                    {" "}
                    168.96 руб.
                  </b>{" "}
                  . За время экскурсии будут осмотрены: достопримечательности
                  Кальяри во время прогулки на сегвее, осмотр исторических
                  зданий в средневековом квартале Кастелло, а также появится
                  возможность увидеть Римский амфитеатр и Пизанские башни. <br />
                  <br />
                </p>
                <div>
                  <a
                    href="https://www.tripadvisor.ru/Attraction_Review-g187881-d1931276-Reviews-NewWaySardinia-Cagliari_Province_of_Cagliari_Sardinia.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={segway} width="600px" alt="hotel room"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tour;
