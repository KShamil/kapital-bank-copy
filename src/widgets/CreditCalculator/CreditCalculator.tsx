import React, { useEffect, useState } from "react";
import { CredirClalculatorProps } from "./CreditCalculator.props";
import styles from "./CreditCalculator.module.scss";
import { Button } from "../../Components";

export const CredirClalculator = ({
  ...props
}: CredirClalculatorProps): JSX.Element => {
  const [loanAmount, setLoanAmount] = useState<number>(300);
  const [loanTerm, setLoanTerm] = useState<number>(3);
  const [interestRate, setInterestRate] = useState<number>(12);

  const handleLoanAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoanAmount(parseInt(event.target.value));
  };

  const handleLoanTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoanTerm(parseInt(event.target.value));
  };

  const handleInterestRateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInterestRate(parseFloat(event.target.value));
  };

  const monthlyPayment = (): string => {
    const monthlyInterestRate = interestRate / 1200;
    const payment =
      (loanAmount * monthlyInterestRate) /
      (1 - 1 / Math.pow(1 + monthlyInterestRate, loanTerm));
    return payment.toFixed(2);
  };

  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.top}>
              <h2>Kalkulyator</h2>
              <div className={styles.btns}>
                <Button appearance="calc-btn">Kredit</Button>
                <Button appearance="calc-btn">Birbank kartı</Button>
                <Button appearance="calc-btn">Depozit</Button>
              </div>
            </div>
            <div className={styles.middle}>
              <h4>Gündəlik tələbat krediti</h4>
              <p>
                Siz müştərilərimizə asanlıqla əldə edə biləcəyiniz nağd kredit
                təklif edirik.
              </p>
              <span>% dərəcəsi rəsmiləşmə zamanı müəyyən olunacaq</span>
            </div>
            <div className={styles.bottom}>
              <div className={styles.card}>
                <label htmlFor="">
                  <span>Mebləğ</span>
                  <br />
                  <span className={styles.result}>{loanAmount}</span>
                </label>
                <input
                  type="range"
                  placeholder="Mebleğ"
                  id="loan-amount"
                  min="300"
                  max="30000"
                  value={loanAmount}
                  onChange={handleLoanAmountChange}
                />
                <span className={styles.span}>300</span>
              </div>
              <div className={styles.card}>
                <label htmlFor="">
                  <span>Faiz</span>
                  <br />
                  <span className={styles.result}>{interestRate}</span>
                </label>
                <input
                  type="range"
                  placeholder="Faiz"
                  id="interest-rate"
                  min="12"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                />
                <span className={styles.span}>12%</span>
              </div>
              <div className={styles.card}>
                <label htmlFor="">
                  <span>Müddət</span>
                  <br />
                  <span className={styles.result}>{loanTerm}</span>
                </label>
                <input
                  type="range"
                  placeholder="Müddət"
                  id="loan-term"
                  min="3"
                  max="59"
                  value={loanTerm}
                  onChange={handleLoanTermChange}
                />
                <span className={styles.span}>3 ay</span>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.box}>
              <h3>
                Nağd pul krediti üçün
                <br />
                aylıq ödəniş
              </h3>
              <span>{monthlyPayment()} ₼</span>
              <Button appearance="result-btn">Sifariş et</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
