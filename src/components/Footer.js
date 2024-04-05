import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaSnapchat,
} from "react-icons/fa";
import classNames from "classnames";

const Footer = () => {
  const iconClass = classNames("text-3xl hover:text-indigo-700");
  const navClasses = classNames("text-xl font-bold hover:text-red-600");
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:justify-evenly items-center bg-gradient-to-r from-sky-500 from-10% via-emerald-500 via-30% to-indigo-500 to-90% ">
      <div className="py-4 px-6">
        <img
          src="./logo.jpg"
          alt="no"
          width={100}
          height={100}
          className="w-44 h-24 rounded-md"
        />
      </div>

      <ul>
        <li>
          <Link to="/" className={navClasses}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/signup" className={navClasses}>
            SignUp
          </Link>
        </li>
        <li>
          <Link to="/login" className={navClasses}>
            Login
          </Link>
        </li>
      </ul>

      <div>
        <h1 className="text-center font-bold text-indigo-950 text-xl">Links</h1>
        <div className="flex gap-4 ">
          <a href="http://www.facebook.com">
            <FaFacebook className={iconClass} />
          </a>
          <a href="http://www.instagram.com">
            <FaInstagram className={iconClass} />
          </a>
          <a href="http://www.instagram.com">
            <FaYoutube className={iconClass} />
          </a>
          <a href="http://www.twitter.com">
            <FaTwitter className={iconClass} />
          </a>
          <a href="http://www.snapchat.com">
            <FaSnapchat className={iconClass} />
          </a>
        </div>
      </div>

      <div>
        <p className="font-bold">All Rights Are Reserved by Azmat &copy;2024</p>
      </div>
    </div>
  );
};

export default Footer;
