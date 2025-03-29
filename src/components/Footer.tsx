import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../../public/logo_2_2/logo_2_2/logo_2_2_4x.webp";

export default function Footer() {
  return (
    <footer className="bg-white flex text-gray-800 py-10 px-4 text-center border-t">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
        {/* Logo */}
        <Image
          src={logo}
          alt="SMTC Logo"
          width={120}
          height={40}
          className="object-contain"
        />

        {/* Company Name */}
        <h3 className="text-lg font-semibold">SHAIKH MOHAMMED TECH CONT</h3>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl text-gray-700">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} All Rights Reserved. <br />
          Designed & Developed by SHAIKH MOHAMMED TECH CONT.
        </p>
      </div>
    </footer>
  );
}
