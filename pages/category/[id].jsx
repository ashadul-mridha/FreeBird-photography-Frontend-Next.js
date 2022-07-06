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

const data = [
  "https://images.unsplash.com/photo-1652608463893-ad70f51e97f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1646370336237-31b23f41b695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1571139865702-d600ae6b49c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1652434893021-f6e0f51c9ea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1652449765460-5281c610e175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
];

const Category = ({ data }) => {
  const [categoryImg, setCategoryImg] = useState(data);
  console.log(categoryImg);
  return (
    <>
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
            <Image
              alt="hello"
              src={`https://fathomless-eyrie-49884.herokuapp.com/uploads/singleimg/${singleImg?.image}`}
              width="100%"
              height="100%"
              layout="responsive"
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
