import React from "react";
import cagliari from "../images/landmarks/cagliare.jpg";
import devil from "../images/landmarks/devil.jpg";
import tower from "../images/landmarks/tower.jpg";
import theatre from "../images/landmarks/theatre.jpg";

function Landmarks() {
  return (
    <div className="landmarks__wrap">
      <div className="container">
        <div className="landmarks">
          <div className="landmarks__header">
            <div className="landmarks__text">
              <h2 className="landmarks__title">Достопримечательности</h2>
              <p className="landmarks__description">
                На сайтах в разделе “куда пойти” описано немного экскурсий. На
                сайте{" "}
                <a
                  href="https://www.booking.com/attractions/city/it/cagliari.html?aid[]=397594&aid[]=397594&label=gog235jc-1FCAEoggI46AdIM1gDaCWIAQGYASG4ARfIAQzYAQHoAQH4AQ2IAgGoAgO4Ao7Cso0GwAIB0gIkYzI2NGEyMmYtMGJlOC00YWM5LWI0M2YtMmU3NmUyMWZhZDkz2AIG4AIB&source=attraction-breadcrumb&date=2021-12-07&start_time=15%3A00"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "25px", fontWeight: "bold" }}
                >
                  Booking.com
                </a>{" "}
                есть возможность быстрого поиска. Их представлено 28.
                <br />
                <br />
                Другие сайты, особенно англоязычные, не смогли мне помочь в
                поиске экскурсионных направлений, и показались мне не удобными.{" "}
                <br />
                Если посетители не желают идти на уже запланированную экскурсию,
                то они могут посмотреть ближайшие достопримечательности там же
                где бронировали номер. Во многом они дублируются.
              </p>
            </div>
            <div className="landmarks__photo">
              <img
                src={cagliari}
                width="500px"
                alt="stock cagliari landmark"
              ></img>
            </div>
          </div>

          <h2 className="landmarks__title" style={{ marginBottom: '50px'}}>Вот некоторые из них</h2>
          <div className="landmarks__cards">
            <a
              className="landmarks__card"
              href="https://www.booking.com/attractions/it/prini6cprbve-hiking-trip-to-the-devils-saddle.html?aid[]=397594&aid[]=397594&label=gog235jc-1FCAEoggI46AdIM1gDaCWIAQGYASG4ARfIAQzYAQHoAQH4AQ2IAgGoAgO4Ao7Cso0GwAIB0gIkYzI2NGEyMmYtMGJlOC00YWM5LWI0M2YtMmU3NmUyMWZhZDkz2AIG4AIB&source=attraction-breadcrumb&date=2021-12-07&start_time=15%3A00&ufi=-112463"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={devil}
                alt="devils peak"
                style={{ width: "400px", height: "250px", objectFit: "cover" }}
              />
              <h2 className="landmarks__card--title">Седло дьявола</h2>
              <p className="landmarks__card--description">
                Дьявольское седло - это седловидное скальное образование,
                доминирующее над районом Поэта сверху. Название этого каменного
                холма происходит от библейской легенды, которая повествует о
                кровавой битве между дьяволом и ангелами и, в частности, об
                архангеле Михаиле, который пытался завоевать прекрасный залив
                Кальяри.Дьявол вышел побежденным в этой битве, настолько
                испугавшись, что оставил седло и убежал; с тех пор залив Кальяри
                был назван заливом ангелов в память об этой победе добра над
                злом.{" "}
              </p>
            </a>

            <a
              className="landmarks__card"
              href="https://www.booking.com/attractions/it/pr3qbhvcz2vp-cultural-walking-tour.html?aid=356980&label=gog235jc-1DCAsocUIMdGluLXRpbi1ob21lSCFYA2gliAEBmAEhuAEXyAEM2AED6AEB-AECiAIBqAIDuALq5bKNBsACAdICJDA4M2E4YzljLWFlMmMtNDQ3OC04YzdkLTg4MmJkMGJmZGZjZdgCBOACAQ&date=2021-12-07&source=attraction-breadcrumb&ufi=-112463&start_time=10%3A00"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={tower}
                alt="devils peak"
                style={{ width: "400px", height: "250px", objectFit: "cover" }}
              />
              <h2 className="landmarks__card--title">
                Башня Торре-дель-Элефанте
              </h2>
              <p className="landmarks__card--description">
                Чаще всего название этой достопримечательности Кальяри на
                русском языке звучит как «Слоновья башня», хотя более точный
                перевод с итальянского — «Башня слона». Название построенная в
                1307 г. башня получила за установленную на ней скульптуру слона.
                Находится постройка в историческом центре города, в районе
                Кастелло. Во времена Средневековья здесь содержали и казнили
                заключенных, вывешивая их головы на всеобщее обозрение.
                Подняться на смотровую площадку стоит 3 EUR.{" "}
              </p>
            </a>

            <a
              className="landmarks__card"
              href="https://www.booking.com/attractions/it/prul9a1oeudt-nora-archaeological-site-tour.html?aid=356980&label=gog235jc-1DCAsocUIMdGluLXRpbi1ob21lSCFYA2gliAEBmAEhuAEXyAEM2AED6AEB-AECiAIBqAIDuALq5bKNBsACAdICJDA4M2E4YzljLWFlMmMtNDQ3OC04YzdkLTg4MmJkMGJmZGZjZdgCBOACAQ&date=2021-12-07&source=attraction-breadcrumb&ufi=-112463&start_time=10%3A00"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={theatre}
                alt="devils peak"
                style={{ width: "400px", height: "250px", objectFit: "cover" }}
              />
              <h2 className="landmarks__card--title">Римский амфитеатр</h2>
              <p className="landmarks__card--description">
                Высеченный в известняковых скалах в I–II вв. амфитеатр
                использовался для проведения гладиаторских боев, казней и
                спортивных состязаний. Ни один туристический маршрут по Кальяри
                не обходится без посещения амфитеатра — это сооружение
                действительно стоит увидеть. Адрес: Via Sant’Ignazio da Laconi,
                19. Взрослый входной билет стоит 4,3 EUR, детский — 2,2 EUR,
                студенческий — 2,8 EUR. Дети до 6 лет проходят бесплатно.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landmarks;
