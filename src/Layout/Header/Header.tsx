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
import bbLogo from "./bblogo.png";
import BirBankCash from "./birbank-cashback-debet.png";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isShowCardsSubmenu, setIsShowCardsSubmenu] = useState<boolean>(false);
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
              <Button appearance="search-btn" onClick={handleOpenSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
              <Image src={bbLogo} alt="error" className={styles.bblogo} />
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
          <div
            className={`${styles.cardsSubmenu} ${
              isShowCardsSubmenu ? styles.showCardsMenu : ""
            } `}
            onMouseEnter={handleShowCardsSubmenuHover}
            onMouseLeave={handleShowCardsSubmenuLeave}
          >
            <div className={styles.container}>
              <div className={styles.left}>
                <div className={styles.links}>
                  <ul className={styles.list}>
                    <li>
                      <strong>Taksit kartlar</strong>
                    </li>
                    <li>
                      <strong>Debet kartlar</strong>
                    </li>
                    <li>
                      <strong>Digital kart</strong>
                    </li>
                    <li>Hədiyyə kartı</li>
                  </ul>
                  <ul className={styles.list}>
                    <li>Kartın müddətinin uzadılması</li>
                    <li>Kartlar üzrə xidmətlər</li>
                    <li>Təhlükəsizlik qaydaları</li>
                    <li>3D secure</li>
                  </ul>
                  <ul className={styles.list}>
                    <li>Kart sifarişi</li>
                  </ul>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.info}>
                  <div className={styles.descr}>
                    <h3>Birbank Cashback taksit</h3>
                    <span>
                      Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən başlayan
                      keşbek, faizsiz və komissiyasız taksit imkanı verən unikal
                      bir kartdır.
                    </span>
                  </div>
                  <Button appearance="submenu-btn">
                    Bir kliklə sifariş et
                  </Button>
                </div>
                <div className={styles.image}>
                  <Image
                    src={BirBankCash}
                    alt="error"
                    width={126}
                    height={200}
                  />
                </div>
              </div>
            </div>
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
                <input type="text" autoComplete="off" placeholder="Sorğunuzu daxil edin"/>
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
