import React from "react";
import { OperationsCardItemsProps } from "./OperationsCardItems.props";
import styles from "./OperationsCardItems.module.scss";
import { operationsCardData } from "../../data/data";
import { OperationsCard } from "../OperationsCard/OperationsCard";

export const OperationsCardItems = ({
  ...props
}: OperationsCardItemsProps): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        {operationsCardData &&
          operationsCardData.map((item) => (
            <OperationsCard data={item} key={item.id} />
          ))}
      </div>
    </>
  );
};
