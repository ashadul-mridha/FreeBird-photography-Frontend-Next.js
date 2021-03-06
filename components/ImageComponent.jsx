/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const ImageComponent = ({ data }) => {
  return (
    <a
      data-lg-size="1406-1390"
      className={"imageWrapper"}
      data-src={`https://fathomless-eyrie-49884.herokuapp.com/uploads/singleimg/${data.image}`}
      data-sub-html={`<h4>Photo Capton - <a href="#" > ${data?.caption} </a></h4> <p> Category - <a href="#">${data?.cat_id?.name}</a></p>`}
    >
      {/* <Image
        alt="single image"
        src={`https://fathomless-eyrie-49884.herokuapp.com/uploads/singleimg/${data.image}`}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="cover"
        className="img-fluid"
      /> */}
      <img
        alt="single image"
        className="img-ashy"
        src={`https://fathomless-eyrie-49884.herokuapp.com/uploads/singleimg/${data.image}`}
      />

      <div className="imageoverlay d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <style jsx>{`
        .imageWrapper {
          padding: 2px;
          background-color: #ffffff;
          cursor: pointer;
          position: relative;
        }
        .img-ashy {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
        .imageoverlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 1;
          opacity: 0;
          transition: 1s all;
        }
        .imageoverlay:hover {
          background-color: black;
          opacity: 1;
        }
        .imageoverlay i {
          color: #ffffff;
        }
        @media only screen and (max-width: 600px) {
          .img-ashy {
            height: 250px;
          }
        }
      `}</style>
    </a>
  );
};

export default ImageComponent;
