import React, { useState } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";
import { Button, MobileAccordion } from "../../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from "./Logo.svg";
import Link from "next/link";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header {...props} className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.logo}>
                <Image
                  className={styles.logo}
                  src={Logo}
                  alt="error"
                  width={210}
                  height={37}
                />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.navList}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Fiziki şəxslər üçün</li>
                  <li className={styles.listItem}>Biznes üçün</li>
                  <li className={styles.listItem}>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className={styles.location}
                    />{" "}
                    Xidmət şəbəkəsi
                  </li>
                </ul>
                <div className={styles.btns}>
                  <button className={styles.btn}>EN</button>
                  <button className={styles.btn}>RU</button>
                  <Button appearance="search-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                </div>
              </div>
            </div>
            <button className={`${styles.burgerBtn} ${
          isOpen ? styles.closeBurgerBtn : ""
        }`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={styles.bottom}>
            <div className={styles.content}>
              <div className={styles.bottomLeft}>
                <ul className={styles.bottomList}>
                  <li>
                    <Link href="">KARTLAR</Link>
                  </li>
                  <li>
                    <Link href="">KREDİTLƏR</Link>
                  </li>
                  <li>
                    <Link href="">İPOTEKALAR</Link>
                  </li>
                  <li>
                    <Link href="">DEPOZİTLƏR</Link>
                  </li>
                  <li>
                    <Link href="">PUL KÖÇÜRMƏLƏRİ</Link>
                  </li>
                  <li>
                    <Link href="">ONLAYN XİDMƏTLƏR</Link>
                  </li>
                  <li>
                    <Link href="">KAMPANİYALAR</Link>
                  </li>
                  <li>
                    <Link href="">FƏRDİ BANKÇILIQ</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.bottomRight}>
                <Button appearance="header-btn">birbank</Button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.mobileMenu} ${
          isOpen ? styles.openMobileMenu : ""
        }`}>
          <MobileAccordion/>
        </div>
      </header>
    </>
  );
};
