import Head from "next/head";
import { useState } from "react";
import CategoryAndAlbumShowcase from "../components/CategoryAndAlbumShowcase";

const AllCategory = (props) => {
  const [categories, setCategories] = useState(props.data);

  // console.log(category);
  return (
    <>
      <Head>
        <title>All Category</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CategoryAndAlbumShowcase
        data={categories}
        imgurl={`https://fathomless-eyrie-49884.herokuapp.com/uploads/categoryimg`}
      />
    </>
  );
};

export default AllCategory;

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.API_ROUTE}/category/all`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
