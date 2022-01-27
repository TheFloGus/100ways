import React from "react";

function Reviews() {
  return (
    <div className="reviews__wrap">
      <div className="container">
        <div className="reviews">
          <h2 className="review__form--tittle">
            Пройдите наш опрос и оставьте свой отзыв!
          </h2>
          <div className="review__form">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfhWyW5bqGC_YVWUC5j6TBBw9SiOBhHzNm0pXhIl_gXmiELYQ/viewform?embedded=true"
              width="640"
              height="400"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Review form"
            >
              Загрузка…
            </iframe>
          </div>
          <h2 className="review__form--tittle">
            Результаты опроса
          </h2>
          <div className="review__results">
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSiJxrlWPKFNZowbt-fOVDxQmYOEEnUb4W_X0a2FvKzztVLsgE8O2vTOjp454JUHVUVONXzAtgmeo_o/pubhtml?gid=829569457&amp;single=true&amp;widget=true&amp;headers=false"
              width="950"
              height="800"
              title="Review results"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reviews;
