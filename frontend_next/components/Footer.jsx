import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 AI Headphones All rights reserverd</p>
      <p className="icons">
        <a href="https://www.instagram.com/ajjuiglesias/" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/ajjuiglesias" target="_blank">
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  );
};

export default Footer;
