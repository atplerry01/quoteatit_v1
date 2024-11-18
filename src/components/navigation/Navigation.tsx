"use client";
import React, { useState } from "react";
import img from "../../../public/assets/images/logo.webp";
import smallLogo from "../../../public/assets/images/logo-dark.png";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import "./style.css";
import Link from "next/link";

const navItems = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "About",
    link: "/about",
  },
  {
    id: 3,
    text: "Services",
    link: "/services",
  },
  {
    id: 4,
    text: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    text: "Contact Us",
    link: "/contact-us",
  },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <nav className=" w-[full]">
      <section className="hidden xl:flex items-center justify-between h-[80px]    w-full p-5 nav_bg">
        <Image src={img} alt="logo" className="h-[41px] w-[185px]" />
        <div>
          <ul className="flex items-center gap-7">
            {navItems.map((nav) => {
              return (
                <li
                  key={nav.id}
                  className="text-white font-semibold text-[17px]"
                >
                  <Link href={nav.link}>{nav.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bg-[#FFFFFF26] text-white gap-2 justify-center flex items-center text-[15px] w-[150px] h-[50px] rounded-[40px]">
          <p>Plan with us</p>

          <HiArrowLongRight className="text-white mt-1" />
        </div>
      </section>
      {/* mobile */}
      <section className="block xl:hidden bg-[#ffffff] h-[75px] w-full p-5 relative">
        <div className="flex items-center justify-between">
          <Image src={smallLogo} alt="logo" className="h-[41px] w-[185px]" />
          <CiMenuFries onClick={handleOpen} size={30} />
        </div>
        <Drawer
          open={open}
          onClose={handleClose}
          anchor="left"
          style={{ width: "70%" }}
        >
          <div className="w-[100%] h-[100vh] bg-[#ffffff] flex flex-col items-center p-8">
            <div className="flex justify-end cursor-pointer w-[100%]">
              <IoIosClose onClick={handleClose} size={30} />
            </div>
            <Image
              src={smallLogo}
              alt="logo"
              className="h-[41px] w-[185px] mt-5"
            />

            <ul className="mt-[40px]  w-[100%]">
              {navItems.map((nav) => {
                return (
                  <li
                    key={nav.id}
                    className="text-black font-semibold text-[17px] mb-5"
                  >
                    <Link href={nav.link}>{nav.text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Drawer>
      </section>
    </nav>
  );
};

export default Navigation;
