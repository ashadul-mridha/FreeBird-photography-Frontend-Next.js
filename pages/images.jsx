//light gallary css
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

//lightgallary plugin
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgRotate from "lightgallery/plugins/rotate";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import Head from "next/head";
import { useState } from "react";
import ImageComponent from "../components/ImageComponent";
import styles from "../styles/images.module.css";

const Images = ({ data }) => {
  const [images, setImages] = useState(data.data);
  return (
    <div className={styles.imgWrapper}>
      <Head>
        <title>Images</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LightGallery mode="lg-fade" plugins={[lgZoom, lgFullscreen, lgRotate]}>
        {images?.map((image, index) => (
          <ImageComponent data={image} key={index} />
        ))}

        <style jsx>
          {`
            .lg-react-element {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              grid-gap: 10px;
              justify-content: center;
              align-items: center;
            }

            @media only screen and (max-width: 992px) {
              .lg-react-element {
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 5px;
              }
            }

            @media only screen and (max-width: 600px) {
              .lg-react-element {
                grid-template-columns: repeat(1, 1fr);
              }
            }
          `}
        </style>
      </LightGallery>
    </div>
  );
};

export default Images;

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.API_ROUTE}/image/all`);
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
