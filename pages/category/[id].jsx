/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "../../styles/category.module.css";

//next import
import Image from "next/image";

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


const Category = ({ data }) => {
  const [categoryImg, setCategoryImg] = useState(data);
  console.log(categoryImg);
  return (
    <>
      <Head>
        <title>Single Category</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.categoryHeader}>
        <h2>Outdoor</h2>
        <p>Image With Out Category</p>
      </div>

      <LightGallery mode="lg-fade" plugins={[lgZoom, lgFullscreen, lgRotate]}>
        {categoryImg?.data.map((singleImg, index) => (
          <a
            key={index}
            data-lg-size="1406-1390"
            className={styles.imageWrapper}
            data-src={`https://fathomless-eyrie-49884.herokuapp.com/uploads/singleimg/${singleImg?.image}`}
            data-sub-html={`<h4>Photo Capton - <a href="#" > ${singleImg?.caption} </a></h4> <p> Category - <a href="#">${singleImg?.cat_id?.name}</a></p>`}
          >
            {/* <Image
              alt="hello"
              src={`https://fathomless-eyrie-49884.herokuapp.com/uploads/singleimg/${singleImg?.image}`}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            /> */}
            <img
              alt="hello"
              src={`https://fathomless-eyrie-49884.herokuapp.com/uploads/singleimg/${singleImg?.image}`}
              width="100%"
              height="300px"
              objectFit="cover"
            />
            <div className={styles.imgContent}>
              <h6>{singleImg?.caption}</h6>
            </div>
          </a>
        ))}
      </LightGallery>
    </>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`${process.env.API_ROUTE}/image/category/${id}`);
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
