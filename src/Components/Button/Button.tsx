import React from "react";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.scss";

export const Button = ({
  appearance,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.headerBtn]: appearance == "header-btn",
        [styles.sliderBtn]: appearance == "slider-btn",
        [styles.searchBtn]: appearance == "search-btn",
        [styles.calcBtn]: appearance == "calc-btn",
        [styles.resultBtn]: appearance == "result-btn",
        [styles.converterBtn]: appearance == "converter-btn",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
