import React from "react";
import { NewsCardProps } from "./NewsCard.props";
import styles from "./NewsCard.module.scss";

export const NewsCard = ({ data, ...props }: NewsCardProps): JSX.Element => {
  const { day, month, news } = data;
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.day}>
            <span>{day}</span>
          </div>
          <div className={styles.month}>
            <span>{month}</span>
          </div>
        </div>
        <div className={styles.right}>
          <span>{news}</span>
        </div>
      </div>
    </>
  );
};
