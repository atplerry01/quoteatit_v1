import Image from "next/image";
import React from "react";
import img from "../../../public/assets/images/logo.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-primary lg:h-[607px] md:h-[738px]">
      <footer className="lg:mx-auto max-w-7xl px-6 lg:px-8  w-[100%] h-[85%]">
        <section className="flex   h-[100%] justify-between flex-wrap md:flex-nowrap">
          <div className="w-[100%] md:w-[50%] pt-[90px]">
            <Image src={img} alt="logo" className="w-[193px] h-[46px]" />
            <p className="my-[20px] text-[#c4c4c4] text-[15px]">
              We understand that business can be chaotic. That’s where we come
              in. We’re focused on adding some much-needed balance to the mix.
            </p>

            <div className="mt-[30px]">
              <h3 className="text-white text-[20px] font-medium mb-[20px]">
                Company Information
              </h3>
              <p className=" text-[#c4c4c4] text-[15px] mb-2">
                Office: 2220 Plymouth Rd #302, Hopkins, Minnesota(MN), 55305
              </p>
              <p className=" text-[#c4c4c4] text-[15px] mb-2">
                Send mail: Herringtonconsulting@gmail.com
              </p>
              <p className=" text-[#c4c4c4] text-[15px]">
                Call us: (234) 109-6666
              </p>
            </div>

            <div className="mt-[40px] flex flex-wrap items-center gap-8">
              <div className="text-white grid place-items-center">
                <FaFacebookF />
                <p>Facebook</p>
              </div>
              <div className="text-white grid place-items-center">
                <FaXTwitter />
                <p>Twitter / X</p>
              </div>
              <div className="text-white grid place-items-center">
                <FaInstagram />
                <p>Instagram</p>
              </div>
              <div className="text-white grid place-items-center">
                <FaTelegramPlane />
                <p>Telegram</p>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block bg-[#353e47] w-[0.1px] md:mx-[20px] lg:mx-[100px]"
            style={{
              height: "100%",
            }}
          ></div>
          <div className="w-[100%] md:w-[50%] pt-6 md:pt-[90px]">
            <div className=" md:flex justify-between flex-wrap">
              <div className="">
                <h3 className="text-white text-[20px] font-medium mb-[20px]">
                  Our Services
                </h3>
                <p className=" text-[#c4c4c4] text-[15px] mb-2">
                  Online Business Consulting
                </p>
                <p className=" text-[#c4c4c4] text-[15px] mb-2">
                  Portfolio Management
                </p>
                <p className=" text-[#c4c4c4] text-[15px] mb-2">
                  Search Engine Optimization
                </p>
                <p className=" text-[#c4c4c4] text-[15px] mb-2">
                  Managed IT Services
                </p>
                <p className=" text-[#c4c4c4] text-[15px]">
                  Conversion Optimization
                </p>
              </div>
              <div className="mt-[20px] md:mt-0">
                <h3 className="text-white text-[20px] font-medium mb-[20px]">
                  Quick Links
                </h3>
                <p className=" text-[#c4c4c4] text-[15px] mb-2">About Us</p>
                <p className=" text-[#c4c4c4] text-[15px] mb-2">
                  Leadership Member
                </p>
                <p className=" text-[#c4c4c4] text-[15px] mb-2">Our Services</p>
                <p className=" text-[#c4c4c4] text-[15px] mb-2">Careers</p>
                <p className=" text-[#c4c4c4] text-[15px]">Case Studies</p>
              </div>
            </div>
            <section>
              <div className="bg-[#353e47] h-[60px] w-[100%]  rounded-[90px] flex items-center justify-between px-4 mt-[60px]">
                <input
                  type="text"
                  placeholder="Don't miss the latest news from us..."
                  className="bg-transparent w-[80%]"
                />
                <FaArrowRight className="text-white" />
              </div>

              <div className="flex items-center w-[100%]  gap-4 mt-4">
                <div className="bg-[#353e47] h-[45px] w-[45px] rounded-[50%]  inline-flex items-center justify-center">
                  <FaBell size={18} className="text-white" />
                </div>
                <p className=" text-[#c4c4c4] text-[15px] mb-2 mt-4">
                  Please sign up to follow the latest news and events from us,
                  we promise not to spam your inbox.
                </p>
              </div>
            </section>
          </div>
        </section>
      </footer>
      <section className="border-t border-t-[#353e47]">
        <div className=" lg:mx-auto max-w-7xl px-6 lg:px-8  w-[100%] flex justify-between flex-wrap md:flex-nowrap gap-6">
          <div className="pt-[10px] ">
            <p className="text-[#c4c4c4] text-[15px] font-medium">
              Copyright © 2024 Graviton by BravisThemes. All Rights Reserved.
            </p>
          </div>
          <div className="pt-[10px] text-right">
            <p className="text-[#c4c4c4] text-[15px] font-medium">
              Confidentiality & Privacy | Legal Information | Return and Refund
              Policy
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
