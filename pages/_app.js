import Script from "next/script";
import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './components/Layout'

function MyApp({ Component, pageProps }) {
  return (
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

export default MyApp
