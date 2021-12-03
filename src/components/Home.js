import React from "react";
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import cagliari1 from "../images/Cagliari1.jpg";
import cagliari2 from "../images/Cagliari2.jpg";
import cagliari3 from "../images/Cagliari3.jpg";
import flag from "../images/flag.svg";
import crest from "../images/crest.png";

function Home() {
  let history = useNavigate();

  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(4);
    }
  };

  const Loop = (currentItem) => {
    if (currentItem.index === 3) {
      setTimeout(() => {
        carouselRef.current.goTo(0);
      }, 3000);
    }
  };

  return (
    <div className="home__wrap">
      <div className="container">
        <div className="home">
          <div className="carousel">
            <Carousel
              onChange={Loop}
              ref={carouselRef}
              onPrevStart={onPrevStart}
              onNextStart={onNextStart}
              itemsToShow={1}
              disableArrowsOnEnd={false}
              enableAutoPlay
              autoPlaySpeed={3000}
            >
              <div className="slide hotel" onClick={() => history("/hotels")}>
                <div className="slide--glass">
                  <h3>Отели</h3>
                  <p>Выберете отель для себя в любой ценовой категории!</p>
                </div>
              </div>
              <div
                className="slide attractions"
                onClick={() => history("/landmarks")}
              >
                <div className="slide--glass">
                  <h3>Достопримечательности</h3>
                  <p>Посмотрите на то, что Кальяри может вам предложить!</p>
                </div>
              </div>
              <div className="slide cafe" onClick={() => history("/meals")}>
                <div className="slide--glass">
                  <h3>Рестораны</h3>
                  <p>Оцените местную кухню!</p>
                </div>
              </div>
              <div
                className="slide reviews"
                onClick={() => history("/reviews")}
              >
                <div className="slide--glass">
                  <h3>Отзывы</h3>
                  <p>Не верите нам? Спросите у людей!</p>
                </div>
              </div>
            </Carousel>
          </div>
          <div className="main-info">
            <div className="main-text">
              <h1 className="main-text--header">Кальяри</h1>
              <p>
                Кальяри — не только столица Сардинии, но и один из самых крупных
                городов Южной Италии. Множество туристов со всего мира приезжают
                сюда, чтобы полюбоваться живописной панорамой залива Ангелов и
                отдохнуть на чистейших пляжах Поэтто и Каламаска. В Кальяри
                сохранилось множество исторических памятников и архитектурных
                достопримечательностей. Например, некрополи холмов Тувикседду,
                ведут свою историю еще с пунических времен. В городе очень много
                музеев, церквей и соборов, но удовольствие доставляют даже
                обычные прогулки по живописным кварталам, сохранившим яркую и
                необычную архитектуру эпохи испанского владычества.
              </p>
              <br />
              <p>
                Самый старый район города включает в себя порт и называется
                Марина. Здесь работает множество небольших ресторанов и кафе,
                модных магазинов, а вечером можно увидеть потрясающе красивый
                закат. Также будет интересно пройтись с экскурсией по центру —
                историческим кварталам Вилланова, Стампаче (здесь, по традиции,
                живут самые богатые семьи города) и Кастелло. Или подняться на
                холм Колле-ди-Монте-Урпини, который находится в одном из самых
                живописных и зеленых районов города. В квартале Вилланова
                расположено очень много религиозных сооружений. Туристы могут
                посетить церковь Сан-Сатурно, выстроенную в V-VI веке на
                фундаменте базилики раннехристианского периода. А поклонникам
                архитектуры эпохи Возрождения понравится храм Сан-Агостино.
              </p>
            </div>
            <div className="main-images">
              <img src={cagliari1} className="main-image" height="200px"></img>
              <img src={cagliari2} className="main-image" height="200px"></img>
              <img src={cagliari3} className="main-image" width="417px"></img>
            </div>
          </div>
          <div className="geo-info">
            <div className="geo-map">
			  <img src={flag} className="main-image" height="200px"></img>
			  <img src={crest} className="main-image" height="200px"></img>
			  <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49452.31292426266!2d9.09335850330501!3d39.22539910731367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e73415b68e1ca3%3A0x201e1506cf816eb1!2sCagliari%2C%20Metropolitan%20City%20of%20Cagliari%2C%20Italy!5e0!3m2!1sen!2sby!4v1638539497503!5m2!1sen!2sby"
                width="550"
                height="350"
              ></iframe>
            </div>
            <div className="geo-text">
              <h1 className="geo-text--title">Демография Кальяри</h1>
              <p>
                Кальяри расположен в южной части итальянского острова Сардиния,
                на берегу 200-километрового Сардинского канала, на
                противоположном берегу которого уже Африка, а именно — Тунис.
              </p>
              <br />
              <p>
                Население Кальяри никогда не было однородным. Национальный
                состав города стабилизировался лишь в середине XIX века, когда
                Сардиния, а вместе с ней и Кальяри, вошли в состав Италии.
                Сегодня в городе проживает около 160 тысяч человек, 98% из
                которых — итальянцы.{" "}
              </p>
              <br />
              <p>
                Кальяри расположен в зоне средиземноморского климата. Природа и
                климат Кальяри считаются одними из наиболее благоприятных для
                здоровья. Подтверждают этот факт множество сардинцев, отметивших
                вековой юбилей. Даже местное приветствие переводится как «живи
                до 100 лет».
              </p>
              <br />
              <p>
                Характерные особенности климата Кальяри — мягкая влажная зима и
                жаркое сухое лето. Морские бризы смягчают летнюю жару, поэтому
                здесь практически всегда дышится легко. Температура воздуха в
                Кальяри никогда не опускается ниже 0°С.
              </p>
			  <br />
              <p>
                Современный свой облик город приобрел в конце XIX — в середине
                XX в. В это время в рамках движения piccone risanatore
                («исцеляющая кирка») многие старинные города Сардинии, в том
                числе и Кальяри, были реконструированы и благоустроены силами
                местных жителей. С 1949 года Кальяри является столицей
                Автономного округа Сардиния, который входит в состав Итальянской
                республики.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
