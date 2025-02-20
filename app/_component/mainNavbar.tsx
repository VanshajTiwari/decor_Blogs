import Link from "next/link";
import {  FaFacebookF, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa6";
import Navbar from "./navbar";
export default function MainNav() {
    return (
      <nav className="bg-white shadow-md py-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:px-6 py-4">
            <Link href="/" className="flex relative pb-10 md:pb-10 md:left-6 items-center">
              <img
                src="/logo.png"
                alt="Brilliant"
                className="h-12"
                style={{ display: "block",transform:"scale(3.5)" }}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <Navbar/>
          <div className="flex pt-4 md:pt-0 space-x-4">
            <Link href="#" target="_blank" className="text-gray-500 hover:text-pink-700 hover:scale-120">
                <FaInstagram/>
            </Link>
            <Link href="#" target="_blank" className="text-gray-500 hover:text-blue-700 hover:scale-120">
              <FaFacebookF/>
            </Link>
            <Link href="#" target="_blank" className="text-gray-500 hover:text-red-700 hover:scale-120">
              <FaPinterest/>
            </Link>
            <Link href="#" target="_blank" className="text-gray-500 hover:text-blue-700 hover:scale-120">
              <FaLinkedin/>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
  