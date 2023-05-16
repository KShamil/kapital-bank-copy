import React, { useRef, useState } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";
import { Button, MobileAccordion } from "../../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from "./Logo.svg";
import Link from "next/link";
import SmalLLogo from "./small-logo.svg";
import bbLogo from './bblogo.png';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isShowCardsSubmenu, setIsShowCardsSubmenu] = useState<boolean>(false);
  const [isShowCreditSubmenu, setIsShowCreditSubmenu] =
    useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleOpenSearch = () => {
    setIsOpenSearch(true);
  };

  const handleCloseSearch = () => {
    setIsOpenSearch(false);
  };

  const handleShowCardsSubmenuLinkHover = () => {
    clearTimeout(hoverTimeoutRef.current!);
    setIsShowCardsSubmenu(true);
  };

  const handleShowCardsSubmenuLinkLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsShowCardsSubmenu(false);
    }, 50);
  };

  const handleShowCardsSubmenuHover = () => {
    clearTimeout(hoverTimeoutRef.current!);
    setIsShowCardsSubmenu(true);
  };

  const handleShowCardsSubmenuLeave = () => {
    setIsShowCardsSubmenu(false);
  };

  const handleShowCreditSubmenuLinkHover = () => {
    clearTimeout(hoverTimeoutRef.current!);
    setIsShowCreditSubmenu(true);
  };

  const handleShowCreditSubmenuLinkLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsShowCreditSubmenu(false);
    }, 50);
  };

  const handleShowCreditSubmenuHover = () => {
    clearTimeout(hoverTimeoutRef.current!);
    setIsShowCreditSubmenu(true);
  };

  const handleShowCreditSubmenuLeave = () => {
    setIsShowCreditSubmenu(false);
  };

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
                  <Button appearance="search-btn" onClick={handleOpenSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.mobileBlock}>
              <Image src={bbLogo} alt='error' className={styles.bblogo}/>
              <button
                className={`${styles.burgerBtn} ${
                  isOpen ? styles.closeBurgerBtn : ""
                }`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.content}>
              <div className={styles.bottomLeft}>
                <ul className={styles.bottomList}>
                  <li
                    onMouseEnter={handleShowCardsSubmenuLinkHover}
                    onMouseLeave={handleShowCardsSubmenuLinkLeave}
                  >
                    <Link href="">KARTLAR</Link>
                  </li>
                  <li
                    onMouseEnter={handleShowCreditSubmenuLinkHover}
                    onMouseLeave={handleShowCreditSubmenuLinkLeave}
                  >
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
          <div
            className={`${styles.cardsSubmenu} ${
              isShowCardsSubmenu ? styles.showCardsMenu : ""
            } `}
            onMouseEnter={handleShowCardsSubmenuHover}
            onMouseLeave={handleShowCardsSubmenuLeave}
          >
            Submenu
          </div>
          <div
            className={`${styles.creditSubmenu} ${
              isShowCreditSubmenu ? styles.showCreditSubmenu : ""
            } `}
            onMouseEnter={handleShowCreditSubmenuHover}
            onMouseLeave={handleShowCreditSubmenuLeave}
          >
            Credit
          </div>
          <div
            className={`${styles.search} ${
              isOpenSearch ? styles.openSearch : ""
            }`}
          >
            <div className={styles.content}>
              <div className={styles.top}>
                <Image
                  src={SmalLLogo}
                  alt="error"
                  className={styles.smallLogo}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className={styles.searchIcon}
                />
                <input type="text" placeholder="Sorğunuzu daxil edin" />
                <span>Axtar</span>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className={styles.closeIcon}
                  onClick={handleCloseSearch}
                />
              </div>
              <div className={styles.bottom}>
                <Button appearance="search-block-btn">Birbank kartı al</Button>
                <Button appearance="search-block-btn">kredit əldə et</Button>
                <Button appearance="search-block-btn">kart sifarişi</Button>
                <Button appearance="search-block-btn">kredit ödənişi</Button>
                <Button appearance="search-block-btn">
                  kommunal ödənişlər
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.mobileMenu} ${
            isOpen ? styles.openMobileMenu : ""
          }`}
        >
          <MobileAccordion />
        </div>
      </header>
    </>
  );
};
