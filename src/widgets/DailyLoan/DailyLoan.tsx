import React from "react";
import { DailyLoanProps } from "./DailyLoan.props";
import styles from "./DailyLoan.module.scss";
import { dailyLoandata } from "../../data/data";
import { DailyLoanItems } from "../../Components";

export const DailyLoan = ({ ...props }: DailyLoanProps): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.dailyLoan}>
        {dailyLoandata &&
          dailyLoandata.map((item) => (
            <DailyLoanItems data={item} key={item.id} />
          ))}
      </section>
    </>
  );
};
