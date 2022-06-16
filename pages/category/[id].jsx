import React, { useState } from 'react';
import styles from '../../styles/category.module.css';

//next import
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";

// const LightGallery = dynamic(() => import("lightgallery/react"), {
//   ssr: false,
// });
// const lgZoom = dynamic(() => import("lightgallery/plugins/zoom"), {
//   ssr: false,
// });

//light gallary css
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css"; 
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-rotate.css";


//lightgallary plugin
// import lgZoom from "lightgallery/plugins/zoom";
// import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgRotate from "lightgallery/plugins/rotate";

const data = [
  "https://images.unsplash.com/photo-1652608463893-ad70f51e97f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1646370336237-31b23f41b695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1571139865702-d600ae6b49c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1652434893021-f6e0f51c9ea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1652449765460-5281c610e175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
];

const Category = ({category}) => {
  const [categoryImg , setCategoryImg] = useState(category.data)
  console.log(categoryImg);
  return (
    <>
      <div className={styles.categoryHeader}>
        <h2>Outdoor</h2>
        <p>Albums list without filter</p>
      </div>

      <LightGallery mode="lg-fade" plugins={[lgZoom, lgFullscreen, lgRotate]}>
        {data.map((singleImg, index) => (
          <a
            key={index}
            data-lg-size="1406-1390"
            className={styles.imageWrapper}
            data-src={singleImg}
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
          >
            {/* <Image
              alt="hello"
              src={`http://localhost:5000/uploads/singleimg/${singleImg?.image}`}
              width={300}
              height={300}
            /> */}
            <Image
              alt="hello"
              src={singleImg}
              width={300}
              height={300}
            />
            <div className={styles.imgContent}>
              <h6>Lorem, ipsum dolor sit amet consectetur adipisicing?</h6>
            </div>
          </a>
        ))}
      </LightGallery>
    </>
  );
};

export default Category;


export async function getServerSideProps(context) {
  const data = await fetch(
    `http://localhost:5000/api/image/category/6282278deaa84a1eee941f80`
  );
  const category = await data.json();
  return {
    props: { category }, // will be passed to the page component as props
  };
}