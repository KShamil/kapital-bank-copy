import React from "react";
import { OperationsCardProps } from "./OperationsCard.props";
import styles from "./OperationsCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const OperationsCard = ({
  data,
  ...props
}: OperationsCardProps): JSX.Element => {
  const { img, strong, link } = data;
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={img} />
        </div>
        <div className={styles.link}>
          <strong>{strong}</strong>
          <span>{link}</span>
        </div>
      </div>
    </>
  );
};
