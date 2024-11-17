import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface IProps {
  children: any;
  pageTitle: string;
}

const Layout = ({ children, pageTitle }: IProps) => {
  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
