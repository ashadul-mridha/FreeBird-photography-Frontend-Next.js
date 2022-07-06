/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AboutMe = ({ data }) => {
  const [aboutMe, setAboutMe] = useState(data.data);

  const showData = aboutMe[aboutMe.length - 1];

  console.log(
    `https://fathomless-eyrie-49884.herokuapp.com/uploads/aboutmeimg/${showData.image}`
  );
  return (
    <>
      <div className="container-fluid vh-100 aboutMeWrapper">
        <div className="row">
          <div className="col-md-6 col-12 col-sm-12">
            {`https://fathomless-eyrie-49884.herokuapp.com/uploads/aboutmeimg/${showData.image}` && (
              <img
                alt="about us photography image"
                src={`https://fathomless-eyrie-49884.herokuapp.com/uploads/aboutmeimg/${showData.image}`}
                height="100%"
                width="100%"
                objectFit="cover"
              />
            )}
          </div>
          <div className="col-md-6 col-12 col-sm-12">
            <div className="aboutInfoWrapper">
              <div className="aboutMeinfo shadow-lg">
                <h2>{showData.title}</h2>
                <p>
                  Sollicitudin diam vitae, amet lacus donec eu, donec vulputate
                  duis nullam nulla, suscipit nulla orci, ornare maecenas eget
                  gravida. Curae sollicitudin lobortis phasellus. Fusce sapien,
                  metus mi et libero enim sed lorem.
                  {/* {showData.desc} */}
                </p>
                <div className={"socialLink"}>
                  <div className={"socialIcon"}>
                    <ul>
                      <li>
                        <Link href={showData.fb_link}>
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href={showData.instagram_link}>
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href={showData.twitter_link}>
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href={showData.youtube_link} passHref={true}>
                          <i className="fa-brands fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .aboutMeWrapper {
              position: relative;
            }
            .aboutInfoWrapper {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: start;
              height: 100%;
              background-color: #ffffff;
            }
            .aboutMeinfo {
              padding: 60px 40px;
              position: absolute;
              margin-left: -74px;
              z-index: 1;
              background-color: #ffffff;
            }
            .aboutMeinfo h2 {
              font-size: 40px;
              font-family: cursive;
              text-transform: capitalize;
              font-weight: 500;
              padding: 10px 0px;
            }
            .aboutMeinfo p {
              font-size: 17px;
              text-transform: capitalize;
              font-weight: 400;
              text-align: justify;
              margin: 20px 67px 20px 0px;
            }
            .socialLink > .socialIcon > ul {
              list-style: none;
              display: flex;
              padding-left: 0px;
            }
            .socialLink > .socialIcon > ul li {
              margin: 0px 5px;
              cursor: pointer;
            }
            .socialLink > .socialIcon > ul li a {
              text-decoration: none;
            }
            .socialLink > .socialIcon > ul li:first-child {
              margin-left: 0px;
            }

            .socialLink > .socialIcon > ul li i {
              color: #222222;
            }
            @media only screen and (max-width: 992px) {
              .aboutMeinfo {
                padding: 20px 10px;
                position: static;
                margin-left: 5px;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default AboutMe;

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.API_ROUTE}/aboutme/all`);
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
