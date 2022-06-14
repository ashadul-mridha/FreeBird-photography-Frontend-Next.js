import Slider from "react-slick";
import styles from "../../styles/HomepageSlider.module.css";
import data from "../components/MOCK_DATA.json";

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

export default function HomePageSlider() {
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
        {data.map((slider, index) => (
          <div key={index}>
            <div className={styles.homepagesliderWrapper}>
              <h2>{slider.name}</h2>
              <p className="my-4">{slider.desc}</p>
              <div>
                <a className="btn-regular">View Project</a>
                <a className="btn-optional ms-3">Contact Me</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
