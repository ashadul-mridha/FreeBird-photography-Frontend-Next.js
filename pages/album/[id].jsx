import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/singleAlbum.module.css";
import ImageComponent from "../components/ImageComponent";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

const SingleAlbum = ({ data, AlbumData }) => {
  const [albums, setAlbums] = useState(data.data);
  const [albumData, setAlbumData] = useState(AlbumData.data);

  return (
    <div className={styles.singlegallaryWrapper}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.singleGallaryHeading}>
              <h2>{albumData.name}</h2>
              <span>{albumData.title}</span>
              <p>{albumData.desc}</p>
              <d className="d-flex">
                <div>
                  {" "}
                  <Link href={"/allalbum"}>Go Back</Link>{" "}
                </div>
              </d>
            </div>
          </div>
        </div>
      </div>
      <LightGallery mode="lg-fade" plugins={[lgZoom, lgFullscreen, lgRotate]}>
        {albums?.map((image, index) => (
          <ImageComponent data={image} key={index} />
        ))}
      </LightGallery>
    </div>
  );
};

export default SingleAlbum;

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`http://localhost:5000/api/image/album/${id}`);
  const data = await res.json();

  const albumRes = await fetch(`http://localhost:5000/api/album/${id}`);
  const AlbumData = await albumRes.json();

  return {
    props: { data, AlbumData }, // will be passed to the page component as props
  };
}
