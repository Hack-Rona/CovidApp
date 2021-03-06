import React, { useState } from "react";
import CarouselData from "./CarouselData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <a href={slide.url} target="blank">
                <img
                  src={slide.urlToImage}
                  alt="article image"
                  className="image"
                />
                <h3 className="headline">{slide.title}</h3>
                <p className="content">{slide.description}</p>
                <p className="content">{slide.name} </p>
              </a>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
