import { useRouter } from "next/router";
import { useState } from "react";
import Slider from "react-slick";
import styles from "../styles/HomepageSlider.module.css";

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

const HomePageSlider = (props) => {
  const router = useRouter();
  const [sliders, setSliders] = useState(props.sliders);

  const gotoContact = () => {
    router.push("/contact");
  };

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
                  https://fathomless-eyrie-49884.herokuapp.com/uploads/homepageimg/${slider.bgImg}
                )`,
              }}
              className={styles.homepagesliderWrapper}
            >
              <h2>{slider.title}</h2>
              <p className="my-4">{slider.subTitle}</p>
              <div>
                <a onClick={gotoContact} className="btn-regular">
                  Contact Me
                </a>
                {/* <a className="btn-optional ms-3">Contact Me</a> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default HomePageSlider;
