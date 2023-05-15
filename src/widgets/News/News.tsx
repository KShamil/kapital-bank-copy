import React from "react";
import { NewsProps } from "./News.props";
import styles from "./News.module.scss";
import { NewsItems } from "../../Components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const News = ({ ...props }: NewsProps): JSX.Element => {
  return (
    <section {...props} className={styles.news}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h2>Xəbərlər</h2>
          <Link href="" className={styles.link}>
            <span>Bütün xəbərlər</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <NewsItems />
      </div>
    </section>
  );
};
