import React, { useState } from "react";
import CategoryAndAlbumShowcase from "./components/CategoryAndAlbumShowcase";

const AllAlbum = (props) => {
  const [albums, setAlbums] = useState(props.data);

  // console.log(category);
  return (
    <>
      <CategoryAndAlbumShowcase
        data={albums}
        imgurl={`http://localhost:5000/uploads/albumimg`}
      />
    </>
  );
};

export default AllAlbum;

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.API_ROUTE}/album/all`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
