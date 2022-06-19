import React , {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Navbar.module.css'
import smallLogo from '../../public/images/logo-big.png';
import bigLogo from "../../public/images/logo-big.png";

const Navbar = () => {
    const [activeNav , setActiveNav] = useState(0);

    const closeMenu = () => {
       setActiveNav(0);
    }
    return (
      <>
        <header
          onClick={() => setActiveNav(1)}
          className={` d-flex flex-column justify-content-between ${styles.basicNavbar}`}
        >
          <div className="logo">
            <Image
              src={smallLogo}
              alt="logo of freeBird"
              width={30}
              height={25}
            />
          </div>
          <div className={styles.bar}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className={styles.email}>
            <i className="fa-solid fa-envelope"></i>
          </div>
        </header>
        {/* hover navbar  */}
        <header
          className={
            activeNav === 1
              ? `${styles.hoverNavbar} shadow-lg ${styles.activeNav}`
              : `${styles.hoverNavbar} shadow-lg`
          }
        >
          <div onClick={() => setActiveNav(0)} className={styles.closeBtn}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className={styles.logo}>
            <Image src={bigLogo} alt="freeBird Logo" width={90} height={80} />
          </div>
          <nav>
            <ul>
              <li onClick={closeMenu}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/images">
                  <a>Images</a>
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/allcategory">
                  <a>Category</a>
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/allalbum">
                  <a>Albums</a>
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/about-me">
                  <a>About Me</a>
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.socialLink}>
            <div className={styles.socialIcon}>
              <ul>
                <li>
                  <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fa-brands fa-dribbble"></i>
                </li>
                <li>
                  <i className="fa-brands fa-behance"></i>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                </li>
              </ul>
            </div>
            <div className={`${styles.copyWright} text-center`}>
              <p>
                copywright 2022 @ <br />
                <span> Ashadul </span>
              </p>
            </div>
          </div>
        </header>
      </>
    );
};

export default Navbar;