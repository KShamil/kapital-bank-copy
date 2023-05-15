import React from "react";
import { DailyLoanItemsProps } from "./DailyLoanItems.props";
import styles from "./DailyLoanItems.module.scss";
import Image from "next/image";
import { Button } from '../Button/Button';

export const DailyLoanItems = ({
  data,...props
}: DailyLoanItemsProps): JSX.Element => {
    const {img,title,descr,strong,subtitle1,subtitle2,subtitle3,info1,info2,info3,link} = data;
  return (
    <div {...props} className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Image src={img} alt="error" />
        </div>
        <div className={styles.right}>
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
      </div>
    </div>
  );
};
