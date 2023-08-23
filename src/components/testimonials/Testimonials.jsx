import React from "react";
import "./testimonials.css";
import ME from "../../assets/img/me.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={ME} alt="me" />
          </div>
          <h5 className="client__name">Deb Mondal</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            impedit quas voluptas laudantium saepe vero quaerat illo velit
            officia! Hic maiores, unde enim doloremque ex quod aliquid
            consequatur. Eaque, laborum.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={ME} alt="me" />
          </div>
          <h5 className="client__name">Deb Mondal</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            impedit quas voluptas laudantium saepe vero quaerat illo velit
            officia! Hic maiores, unde enim doloremque ex quod aliquid
            consequatur. Eaque, laborum.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={ME} alt="me" />
          </div>
          <h5 className="client__name">Deb Mondal</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            impedit quas voluptas laudantium saepe vero quaerat illo velit
            officia! Hic maiores, unde enim doloremque ex quod aliquid
            consequatur. Eaque, laborum.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
