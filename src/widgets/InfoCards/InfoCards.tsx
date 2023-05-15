import React from "react";
import { InfoCardsProps } from "./InfoCards.props";
import styles from "./InfoCards.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import CashPaimentImg from "../../assets/Images/info-cards-img/cashPayment.webp";
import HumanImg from "../../assets/Images/info-cards-img/90789318742-min.webp";

export const InfoCards = ({ ...props }: InfoCardsProps): JSX.Element => {
  return (
    <>
      <div className={styles.wrapper} {...props}>
        <div className={styles.leftCard}>
          <div className={styles.info}>
            <h2>Onlayn kredit ödənişi</h2>
            <span>
              Banka gəlmədən və növbələrdə vaxt itirmədən kartınızla 4 addıma
              kredit borcunuzun ödənişi.
            </span>
            <div >
              <Link href="" className={styles.link}>
                <span>Ödəniş et</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div className={styles.image}>
            <Image className={styles.img} src={CashPaimentImg} alt="error" width={200} height={288}/>
          </div>
        </div>
        <div className={styles.rightCard}>
          <div className={styles.info}>
            <h2>İnsan resursları</h2>
            <span>Kapital Bankın peşəkarlar komandasına qoşulmaq istəyirsinizsə, Sizi müvafiq vakansiyaya müraciət etməyə dəvət edirik. Biz sizə dinamik mühitdə maraqlı və perspektivli iş təklif edirik.</span>
            <div>
              <Link href="" className={styles.link}>
                <span>Daha ətraflı</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div className={styles.image}>
            <Image className={styles.img} src={HumanImg} alt="error" width={200} height={224}/>
          </div>
        </div>
      </div>
    </>
  );
};
