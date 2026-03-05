import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="  bg-base-200 text-base-content p-10">
      <div className="footer sm:footer-horizontal lg:container w-full mx-auto">
        <aside>
          <a href="" className="">
            CS — Ticket System
          </a>
          <p className="max-w-md">
            CS Ticket System helps manage customer support tickets efficiently
            by tracking progress and resolving issues quickly
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover flex items-center gap-1">
            <FaXTwitter className="p-1 text-2xl text-black rounded-full bg-white" />
            @CS — Ticket System
          </a>
          <a className="link link-hover flex items-center gap-1">
            <FaLinkedinIn className="p-1 text-2xl text-black rounded-full bg-white"  />@CS — Ticket System
          </a>
          <a className="link link-hover flex items-center gap-1">
            <FaFacebookF className="p-1 text-2xl text-black rounded-full bg-white"  />@CS — Ticket System
          </a>
          <a className="link link-hover flex items-center gap-1">
            <IoMdMail className="p-1 text-2xl text-black rounded-full bg-white" />support@cst.com
          </a>
        </nav>
      </div>
      <div className="divider"></div>
      <aside className="flex justify-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by CS — Ticket System
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
