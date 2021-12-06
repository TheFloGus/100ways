import React from "react";
import logo from "../images/full_logo.png";
import office from "../images/About/office.png";
import colors from "../images/About/colors.png";
import GK from "../docs/grazhdanskyj_kodeks_respublyky_belarus.doc";
import OKFS from "../docs/OKFS_17_05_2018.doc";
import OKOPF from "../docs/OKOPF_17_05_2018.doc";
import OKRB from "../docs/OKRB_002_2019.docx";
import Post from "../docs/Post_97.docx";
import ourOffice from "../images/About/ourOffice.png";

function About() {
  return (
    <div className="about__wrap">
      <div className="container">
        <div className="about__blocks">
          <div className="about__block">
            <div className="about__block--title">
              <h2>О нас</h2>
            </div>
            <div className="about__block--content">
              <div className="about__block--description">
                <p>
                  Практически всем туристическим фирмам свойственно нахваливать
                  себя, но говорят скромность украшает. Мы старомодно в это
                  верим, поэтому расскажем о себе только правду. Туристическая
                  фирма «Краски мира» — это молодость, профессионализм,
                  надежность и честность. Мы верим, что клиент должен отдыхать
                  не только во время своего путешествия, но и в процессе выбора
                  и решения всех сопутствующих вопросов касающихся долгожданного
                  отдыха. Поэтому своим туристам мы гарантируем индивидуальный
                  подход и качественное обслуживание на всех этапах нашей
                  работы.
                </p>
                <h2 className="about__list--title">Наши направления:</h2>
                <ul className="about__list">
                  <li className="about__list--item">Молодежный туризм</li>
                  <li className="about__list--item">Студенческие поездки</li>
                  <li className="about__list--item">
                    Программы обмена (Work and travel, Study abroad)
                  </li>
                  <li className="about__list--item">Рабочие поездки</li>
                  <li className="about__list--item">Семейный отдых</li>
                </ul>
                <h2 className="about__list--title">
                  Выбирая 100ways, Вы получаете не только легальное
                  трудоустройство за границей и отличный отдых, но и…
                </h2>
                <ul className="about__list">
                  <li className="about__list--item">
                    Индивидуальный подход к вашему делу
                  </li>
                  <li className="about__list--item">
                    Полную информацию и четкий план последующих действий
                  </li>
                  <li className="about__list--item">
                    Консультацию на каждом этапе совместной работы
                  </li>
                  <li className="about__list--item">
                    Поддержку и помощь на протяжении всего времени нашей поездки
                  </li>
                  <li className="about__list--item">
                    Спокойствие и уверенность в профессиональности наших
                    действий
                  </li>
                </ul>

                <h2 style={{ marginBottom: "10px" }}>Наши телефоны:</h2>
                <p>+375 (29) 123 45 67 A1</p>
                <p>+375 (44) 123 45 67 MTC</p>
                <p>+375 (25) 123 45 67 life:)</p>
                <br />
                <h2 style={{ marginBottom: "10px" }}>Наш email:</h2>
                <a href="mailto: 100ways@example.com">100ways@example.com</a>
                <br />
                <br />
                <h2 style={{ marginBottom: "10px" }}>Наши соц. сети:</h2>
                <a
                  href="https://www.instagram.com/100ways_travel/"
                  style={{ display: "block" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.instagram.com/100ways_travel/"
                  style={{ display: "block" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Vk
                </a>
                <a
                  href="https://www.instagram.com/100ways_travel/"
                  style={{ display: "block" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </div>
              <img
                src={logo}
                className="about__block--logo"
                width="250px"
                height="100%"
                style={{ marginRight: "10%" }}
                alt="logo"
              ></img>
            </div>
          </div>

          <div className="about__block">
            <div className="about__block--title">
              <h2>Наш фирменный стиль</h2>
            </div>
            <div className="about__block--content">
              <img src={logo} height="100%" width="200px" alt="logo"></img>
              <img src={office} height="100%" width="600px" alt="office"></img>
              <img src={colors} height="400px" alt="color palette"></img>
            </div>
          </div>

          <div className="about__block">
            <div className="about__block--title">
              <h2>Наша форма собственности</h2>
            </div>
            <div className="about__block--content">
              <div className="about__block--description">
                <h2>Мы - частная коммерческая организация ООО "СтоВэйс"</h2>
                <p>Цель организации - получение прибыли</p>
                <h2 className="about__list--title">Почему выбрано ООО:</h2>
                <ul className="about__list">
                  <li className="about__list--item">
                    Эта форма наиболее понятна и законодательно урегулирована
                  </li>
                  <li className="about__list--item">
                    На уровне устава можно прописать детальные отношения
                    партнеров (вплоть до того, что будет с долей партнера в
                    случае его развода с женой, например), правила покупки или
                    продажи бизнеса, обращение долей и так далее
                  </li>
                  <li className="about__list--item">
                    Если бизнесу вдруг потребуется новый партнер или
                    дополнительное финансирование, то в ООО сделать это гораздо
                    проще
                  </li>
                  <li className="about__list--item">
                    Неоспоримым преимуществом ООО является простота выхода из
                    состава участников с получением фактической стоимости доли
                    либо продажа своей доли другому лицу
                  </li>
                  <li className="about__list--item">
                    По своим долгам ООО отвечает исключительно принадлежащим ему
                    имуществом
                  </li>
                  <li className="about__list--item">
                    В качестве налогообложения в ООО может применяться общая
                    система (18% — налог на прибыль и 20% — НДС) либо упрощенная
                    система (5% от валовой выручки без НДС либо 3% с НДС)
                  </li>
                </ul>
              </div>
              <div className="about__form--docs">
                <h3 style={{ marginBottom: "20px" }}>
                  Список документов использованных для анализа и выбора формы
                  собственности:
                </h3>
                <a href={GK} download className="about__docs--link">
                  Гражданский кодекс Республики Беларусь
                </a>
                <a href={OKFS} download className="about__docs--link">
                  ОБЩЕГОСУДАРСТВЕННЫЙ КЛАССИФИКАТОР РЕСПУБЛИКИ БЕЛАРУСЬ 002-99
                </a>
                <a href={OKOPF} download className="about__docs--link">
                  ОБЩЕГОСУДАРСТВЕННЫЙ КЛАССИФИКАТОР РЕСПУБЛИКИ БЕЛАРУСЬ 019-2013
                </a>
                <a href={OKRB} download className="about__docs--link">
                  ОБЩЕГОСУДАРСТВЕННЫЙ КЛАССИФИКАТОР РЕСПУБЛИКИ БЕЛАРУСЬ 002-2019
                </a>
                <a href={Post} download className="about__docs--link">
                  Постановление №97
                </a>
              </div>
            </div>
          </div>
          <div className="about__block">
            <div className="about__block--title">
              <h2>Наш офис</h2>
            </div>
            <div className="about__block--content">
              <div className="about__block--description">
                <h2 style={{ marginBottom: "20px" }}>
                  г. Минск, ул. Аранская 8, БЦ CASPIAN PLAZA Площадь: 465 м2
                </h2>
                <p
                  style={{
                    marginBottom: "10px",
                    marginTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Дополнительные удобства:
                </p>
                <ul>
                  <li>системы кондиционирования и вентиляции</li>
                  <li>класс A</li>
                  <li>отдельный вход</li>
                  <li>оживленное место</li>
                  <li>парковка</li>
                  <li>рампа</li>
                  <li>охрана</li>
                  <li>сигнализация</li>
                  <li>видеонаблюдение</li>
                  <li>компьютерная сеть</li>
                  <li>скоростной интернет</li>
                  <li>просторный и комфортный холл</li>
                </ul>
                <p
                  style={{
                    marginBottom: "10px",
                    marginTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Транспортное сообщение:
                </p>
                <p>
                  Поблизости располагается несколько автобусных остановок:
                  Аранская, Белмедпрепараты. От данных остановок можно доехать
                  до станции метро Первомайская, Пролетарская или до вокзала.
                </p>
                <p
                  style={{
                    marginBottom: "10px",
                    marginTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Преимущества выбранного варианта:
                </p>
                <ul>
                  <li>Небольшое помещение, но при этом просторное</li>
                  <li>Хорошая цена для стартапа</li>
                  <li>Отсутствие конкурентов поблизости</li>
                  <li>Хорошее расположение и транспортное сообщение</li>
                  <li>Развитая инфраструктура</li>
                  <li>Новый ремонт</li>
                </ul>
              </div>
              <div className="about__office">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.6242259940473!2d27.56709461573185!3d53.88510818009552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf21627a828b%3A0x6925a44ae7e507b0!2sCaspian%20Plaza!5e0!3m2!1sen!2sby!4v1638791983816!5m2!1sen!2sby"
                  width="500"
                  height="350"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <img src={ourOffice} width="500px"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
