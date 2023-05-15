import React, { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import styles from "./Layout.module.scss";

export const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.layout}>
        <Header />
        <div className={styles.body}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export const withLayout = <L extends Record<string, unknown>>(
  Component: FunctionComponent<L>
) => {
  return function withLayoutComponent(props: L): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
