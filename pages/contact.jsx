import Head from 'next/head';
import React from 'react';
import styles from '../styles/contact.module.css';

const Contact = () => {
    return (
      <>
        <Head>
          <title>Contact Us</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100 bg-light">
            <div className="col-md-8">
              <div className={`${styles.contactWrapper} shadow`}>
                <div className="d-flex justify-content-start align-items-center">
                  <i className="fa-solid fa-house-chimney"></i>
                  <p>address: 121 King Street, Melbourne, Australia</p>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <i className="fa-solid fa-phone"></i>
                  <p>phone: +123 456 789 000</p>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <i className="fa-solid fa-envelope"></i>
                  <p> email: company@email.com</p>
                </div>
                <ul className={styles.socialIcon}>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Contact;