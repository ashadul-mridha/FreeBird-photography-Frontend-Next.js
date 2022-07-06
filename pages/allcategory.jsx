import { useState } from "react";
import CategoryAndAlbumShowcase from "../components/CategoryAndAlbumShowcase";

const AllCategory = (props) => {
  const [categories, setCategories] = useState(props.data);

  // console.log(category);
  return (
    <>
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
