import React from "react";
import { CarouselItemsProps } from "./CarouselItems.props";
import styles from "./CarouselItems.module.scss";
import Image from "next/image";
import { Button } from "../Button/Button";

export const CarouselItems = ({
  data,
  ...props
}: CarouselItemsProps): JSX.Element => {
  const { title, strong, small, img, link } = data;
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.left}>
            <span>{title}</span>
            <strong>{strong}</strong>
            <small>{small}</small>
            <Button appearance="slider-btn">{link}</Button>
          </div>
          <div className={styles.right}>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src={img}
                alt="error"
                height={288}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
