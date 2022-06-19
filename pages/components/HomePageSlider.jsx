import React, { useState } from "react";
import Slider from "react-slick";
import styles from "../../styles/HomepageSlider.module.css";
import data from "./MOCK_DATA.json";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    >
      <div className={styles.arrownexticon}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className={styles.arrownextprev}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
    </div>
  );
}

const HomePageSlider= (props) => {
  const [sliders, setSliders] = useState(props.sliders);

  console.log("homepage sliders.js", sliders);

  const settings = {
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {sliders?.data.map((slider, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(
                  http://localhost:5000/uploads/homepageimg/${slider.bgImg}
                )`,
              }}
              className={styles.homepagesliderWrapper}
            >
              <h2>{slider.title}</h2>
              <p className="my-4">{slider.subTitle}</p>
              <div>
                <a className="btn-regular">Contact Me</a>
                {/* <a className="btn-optional ms-3">Contact Me</a> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}


export default HomePageSlider;
