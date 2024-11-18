import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

interface IProps {
  pageTitle: string;
}

const Hero = ({ pageTitle }: IProps) => {
  return (
    <div className="lg:mx-auto max-w-7xl px-4 lg:px-8  w-[100%] h-[80%] flex justify-center flex-col">
      <h3 className="text-[#FFFFFF] text-[40px] xl:text-[60px] font-normal">
        {pageTitle}
      </h3>
      <p className="text-[#DBDBDB] text-[15px] xl:text-[17px] xl:w-[600px] w-[90%] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        pharetra tortor eget lacus ullamcorper, posuere fringilla justo
        convallis.
      </p>

      <div className="xl:w-[650px] w-[80%] h-[0.3px] bg-[#e5e5e5]  relative mt-7">
        <div className="w-[50px] h-[3px] bg-[white] absolute top-[-1px]"></div>
      </div>

      <div className="flex items-center gap-2 mt-5 text-[#ffffff]">
        <p className="text-[15px] font-medium text-[#ffffff]">Home</p>
        <HiArrowLongRight />
        <p>{pageTitle}</p>
      </div>
    </div>
  );
};

export default Hero;
