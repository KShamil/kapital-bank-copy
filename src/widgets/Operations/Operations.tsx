import React from "react";
import { OperationsProps } from "./Operations.props";
import styles from "./Operations.module.scss";
import { OperationsCardItems } from "../../Components";

export const Operations = ({ ...props }: OperationsProps): JSX.Element => {
  return (
    <section {...props} className={styles.operations}>
      <div className={styles.content}>
        <OperationsCardItems />
      </div>
    </section>
  );
};
