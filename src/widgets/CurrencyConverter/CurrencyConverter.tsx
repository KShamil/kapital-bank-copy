import React, { useState } from "react";
import { CurrencyConverterProps } from "./CurrencyConverter.props";
import styles from "./CurrencyConverter.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Components";

type Currency = "AZN" | "USD" | "EUR";

type CurrencyRates = {
  [key in Currency]: number;
};

const currencyRates: CurrencyRates = {
  USD: 0.5875,
  EUR: 0.5307,
  AZN: 1,
};

export const CurrencyConverter = ({
  ...props
}: CurrencyConverterProps): JSX.Element => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<Currency>("AZN");
  const [toCurrency, setToCurrency] = useState<Currency>("USD");

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));
  };

  const handleFromCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromCurrency(event.target.value as Currency);
  };

  const handleToCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setToCurrency(event.target.value as Currency);
  };

  const convertCurrency = (currency: Currency) => {
    const rate = currencyRates[currency];
    const convertedAmount = amount * (rate / currencyRates[fromCurrency]);
    return convertedAmount.toFixed(2);
  };

  return (
    <div {...props} className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.top}>
            <h2>
              <span>Valyuta</span>
              <strong>kalkulyatoru</strong>
            </h2>
            <p>Bəzi filiallar üzrə fərqli məzənnələr təyin edilə bilər</p>
          </div>
          <div className={styles.bottom}>
            <table>
              <thead>
                <tr>
                  <th>Valyuta</th>
                  <th>Alış</th>
                  <th>Satış</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.currency}>USD</td>
                  <td className={styles.buy}>1.697</td>
                  <td>1.702</td>
                </tr>
                <tr>
                  <td className={styles.currency}>EUR</td>
                  <td className={styles.buy}>1.8388</td>
                  <td>1.8843</td>
                </tr>
              </tbody>
            </table>
            <Link href="" className={styles.link}>
              <span>Daha ətraflı</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.converter}>
            <div className={styles.top}>
              <Button appearance="converter-btn">Mən satıram</Button>
              <Button appearance="converter-btn">Mən alıram</Button>
            </div>
            <div className={styles.input}>
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
              />
              <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                {Object.keys(currencyRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <span></span>
            </div>
            <div className={styles.info}>
              <div>
                <span>{isNaN(amount) ? 0.00 : convertCurrency("USD")}</span>
                <span>USD</span>
              </div>
              <div>
                <span>{isNaN(amount) ? 0.00 : convertCurrency("EUR")}</span>
                <span>EUR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
