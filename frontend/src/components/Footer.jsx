import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-5 absolute bottom-0 w-full">
      <div className="container mx-auto">       
        <div className="text-center">
          <p className="flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-2" /> by Abhinav, Rashi, Tanu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
