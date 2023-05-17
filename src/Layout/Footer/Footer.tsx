import React from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import QrCode from "./qr-code.svg";
import PlayStore from "./play-store.svg";
import AppGalery from "./app-gallery.svg";
import AppStore from "./app-store.svg";
import Egov from "./egov.png";
import AesfLogo from "./aesf-logo.png";
import Info from "./info.png";
import Msp from "./msp.png";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  function solid(
    arg0: string
  ): import("@fortawesome/fontawesome-svg-core").IconProp {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <footer {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.navLinks}>
              <h5>Kapital Bank</h5>
              <ul className={styles.list}>
                <li>
                  <Link href="">Bank haqqında</Link>
                </li>
                <li>
                  <Link href="">İnsan resursları</Link>
                </li>
                <li>
                  <Link href="">Xidmət şəbəkəsi</Link>
                </li>
                <li>
                  <Link href="">Birbank</Link>
                </li>
                <li>
                  <Link href="">Xəbərlər</Link>
                </li>
                <li>
                  <Link href="">Təklif və şikayətlər</Link>
                </li>
              </ul>
            </div>
            <div className={styles.navLinks}>
              <h5>Məhsullar</h5>
              <ul className={styles.list}>
                <li>
                  <Link href="">Kartlar</Link>
                </li>
                <li>
                  <Link href="">Kreditlər</Link>
                </li>
                <li>
                  <Link href="">Depozitlər</Link>
                </li>
                <li>
                  <Link href="">Sığorta</Link>
                </li>
                <li>
                  <Link href="">Pul köçürmələri</Link>
                </li>
                <li>
                  <Link href="">Fərdi Bankçılıq</Link>
                </li>
                <li>
                  <Link href="">Onlayn Xidmətlər</Link>
                </li>
              </ul>
            </div>
            <div className={styles.navLinks}>
              <h5>Çevik keçidlər</h5>
              <ul className={styles.list}>
                <li>
                  <Link href="">Birbank kartı sifariş et</Link>
                </li>
                <li>
                  <Link href="">Kredit sifariş et</Link>
                </li>
                <li>
                  <Link href="">Debet kart sifariş et</Link>
                </li>
                <li>
                  <Link href="">Onlayn ödənişlər</Link>
                </li>
              </ul>
            </div>
            <div className={styles.navLinks}>
              <h5>Digər</h5>
              <ul className={styles.list}>
                <li>
                  <Link href="">Onlayn növbə</Link>
                </li>
                <li>
                  <Link href="">Tariflər</Link>
                </li>
                <li>
                  <Link href="">Necə etməli</Link>
                </li>
                <li>
                  <Link href="">FAQ</Link>
                </li>
                <li>
                  <Link href="">Bloqlar</Link>
                </li>
              </ul>
            </div>
            <div className={styles.downloads}>
              <div className={styles.title}>
                <h5>
                  Birbank tətbiqini yükləmək üçün <br /> QR-kodu oxudun.
                </h5>
                <Image src={QrCode} alt="error" />
              </div>
              <div className={styles.mobileApps}>
                <div className={styles.info}>
                  <Image src={PlayStore} alt="error" className={styles.img} />
                  <div>
                    <strong>Google Play</strong>
                    <span>Mobil tətbiqi yüklə</span>
                  </div>
                </div>
                <div className={styles.info}>
                  <Image src={AppStore} alt="error" className={styles.img} />
                  <div>
                    <strong>App Store</strong>
                    <span>Mobil tətbiqi yüklə</span>
                  </div>
                </div>
                <div className={styles.info}>
                  <Image src={AppGalery} alt="error" className={styles.img} />
                  <div>
                    <strong>App Gallery</strong>
                    <span>Mobil tətbiqi yüklə</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.contactNumber}>
              <FontAwesomeIcon icon={faPhoneFlip} />
              <span>196</span>
            </div>
            <div className={styles.socialMediaIcons}>
              <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <p>© 2023 «Kapital Bank» ASC. Bütün hüquqlar qorunur.</p>
              <p>
                &quot;Kapital Bank&quot; ASC Azərbaycan Republikasının Maliyyə
                Bazarlarına Nəzarət Palatasının 05 noyabr 2018-ci il tarixli 244
                nömrəli Bank Lisenziyası əsasında fəaliyyət göstərir.
              </p>
            </div>
            <div className={styles.right}>
              <Image src={Egov} alt="error" />
              <Image src={AesfLogo} alt="error" width={75} height={59} />
              <Image src={Info} alt="error" />
              <Image src={Msp} alt="error" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};





