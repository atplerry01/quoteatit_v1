import React from "react";
import Navigation from "../navigation/Navigation";
import "./style.css";
import Hero from "../Hero/Hero";

interface IProps {
  pageTitle: string;
}

const Header = ({ pageTitle }: IProps) => {
  return (
    <div className="h-[500px] w-full header_bg">
      <Navigation />
      <Hero pageTitle={pageTitle} />
    </div>
  );
};

export default Header;
