import React, { useState } from "react";
import styles from "./../../styles/catAndAlbumShowcase.module.css";
import { useRouter } from "next/router";

const CategoryAndAlbumShowcase = ({ data, imgurl }) => {
  const router = useRouter();

  const gotoCategory = (id) => {
    if (imgurl === `http://localhost:5000/uploads/categoryimg`) {
        router.push(`/category/${id}`);
    } else{
        router.push(`/album/${id}`);
    }
  };
  // console.log(category);
  return (
    <div className={styles.categoryWrapper}>
      {data?.data.map((singleData, index) => (
        <div
          onClick={() => gotoCategory(singleData._id)}
          style={{
            backgroundImage: `url(${imgurl}/${singleData.image})`,
          }}
          key={index}
          className={styles.category}
        >
          <h5>{singleData.name}</h5>
        </div>
      ))}
    </div>
  );
};

export default CategoryAndAlbumShowcase;