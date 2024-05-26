import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <main className="bg-[#2D1D54] text-white">
      <div className="max-w-[1100px] md:mx-auto mx-2 flex flex-wrap justify-between pt-20 pb-4 border-b">
        <section>
          <img
            src="https://provisa.com.np/wp-content/uploads/2022/08/logo_provisa@3x_corrected-e1659629955744.png"
            alt="sd"
            className="w-60"
          />
          <p className="w-60">
            Don't just take our word for it, come see us and let us show you
            that you've come to the right place.
          </p>
        </section>
        <section>
          <h2 className="font-semibold text-xl border-b-2">Quick Links</h2>
          <nav className="list-none grid gap-3 mt-4">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Contact Us</li>
            <li>FaQ</li>
            <li>Blogs</li>
          </nav>
        </section>
        <section>
          <h2 className="font-semibold text-xl border-b-2">Test Preparation</h2>
          <nav className="list-none grid gap-3 mt-4">
            <li>IELTS</li>
            <li>PTE</li>
            <li>JAPANESE LANGUAGE</li>
          </nav>
        </section>
        <section>
          <h2 className="font-semibold text-xl border-b-2">Contact Us</h2>
          <nav className="list-none grid gap-3 mt-4">
            <div className="flex  gap-2">
              <IoLocationSharp />
              <p className="w-60">
                Laxmi Plaza, Putalisadak, Padmodaya Mode, Kathmandu, Nepal
              </p>
            </div>
            <div className="flex items-center gap-2">
              <IoCall />
              <p>+9779851101782,01-4531819</p>
            </div>
            <div className="flex items-center gap-2 border-b pb-4 ">
              <IoMail />
              <p>admin@provisa.com.np</p>
            </div>
            <div className="flex items-center gap-6 text-l">
              <FaFacebookF />
              <GrInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
          </nav>
        </section>
      </div>
      <div className="text-center py-10">
        <p>
          Copyright © 2024, Professional Visa and Education Services Pvt. Ltd. |
          All right reserved.
        </p>
      </div>
    </main>
  );
};

export default Footer;
