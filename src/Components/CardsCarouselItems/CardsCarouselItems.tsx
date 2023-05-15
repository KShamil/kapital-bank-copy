import React from "react";
import { CardsCarouselItemsProps } from "./CardsCarouselItems.props";
import styles from "./CardsCarouselItems.module.scss";
import { Button } from "../Button/Button";
import Image from "next/image";

export const CardsCarouselItems = ({
  data,
  ...props
}: CardsCarouselItemsProps): JSX.Element => {
  const {
    id,
    img,
    title,
    strong,
    descr,
    subtitle1,
    subtitle2,
    subtitle3,
    info1,
    info2,
    info3,
    link,
  } = data;
  return (
    <div {...props} className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.top}>
            <h2>
              <span>{title}</span>
              <strong>{strong}</strong>
            </h2>
            <p>{descr}</p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.infoList}>
              <div className={styles.info}>
                <h4>{subtitle1}</h4>
                <span>{info1}</span>
              </div>
              <div className={styles.info}>
                <h4>{subtitle2}</h4>
                <span>{info2}</span>
              </div>
              <div className={styles.info}>
                <h4>{subtitle3}</h4>
                <span>{info3}</span>
              </div>
            </div>
            <Button appearance="slider-btn">{link}</Button>
          </div>
        </div>
        <div className={styles.right}>
          <Image className={styles.img} src={img} alt="error" width={320} height={320} />
        </div>
      </div>
    </div>
  );
};
