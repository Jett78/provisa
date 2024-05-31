import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import HeaderWLogo from "./HeaderWLogo";

const Header = () => {
  return (
    <main className="sticky">
      <div className="bg-[#F4310A] py-3  lg:flex hidden gap-28 justify-center text-[13px] text-white ">
        <section className="flex items-center gap-6 text-l">
          <FaFacebookF />
          <GrInstagram />
          <FaTwitter />
          <FaYoutube />
        </section>
        <section className="flex items-center gap-1">
          <IoCall />
          <p>+977-9851101782</p>
        </section>
        <section className="flex items-center gap-1">
          <IoMail />
          <p>admin@provisa.com.np</p>
        </section>
        <section className="flex items-center gap-1">
          <IoLocationSharp />
          <p>Laxmi Plaza, Putalisadak, Padmodaya Mode, Kathmandu, Nepal</p>
        </section>
      </div>
      <HeaderWLogo/>
    </main>
  );
};

export default Header;
