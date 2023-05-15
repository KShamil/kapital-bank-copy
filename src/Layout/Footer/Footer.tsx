import React from "react";
import { FooterProps } from "./Footer.props";
import styles from './Footer.module.scss';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props} className={styles.footer}>Footer</div>;
};
