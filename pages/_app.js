import "bootstrap/dist/css/bootstrap.min.css";
import Router from "next/router";
import React from 'react';
import Script from "next/script";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Layout from '../components/Layout';
import '../styles/globals.css';
import { Loading } from "../components/Loading";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
    {
      loading ? (
        <Loading />
      ) : (
        <Layout>
      <Component {...pageProps} />
      <Script
          src="https://unpkg.com/react/umd/react.production.min.js"
          strategy="lazyOnload" 
        />

        <Script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          strategy="lazyOnload" 
         />

        <Script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          strategy="lazyOnload" 
        />
        <Script src="https://kit.fontawesome.com/b98d090fd4.js" strategy="lazyOnload" />
    </Layout>
      )
    }
    </>
  )
}

export default MyApp
