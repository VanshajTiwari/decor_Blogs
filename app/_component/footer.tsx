import Link from "next/link";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:block">
            <div className="flex items-center w-fu justify-center rounded-full bg-white max-w-[100px] mb-4">
                <img src="/logo.png" alt="logo" className="w-full" style={{transform:"scale(1.6)"}}/>
            </div>
            <h3 className="text-xl font-semibold">Vraj Gopal Events</h3>
            <p className="mt-2 text-gray-400">
              We are committed to delivering the best digital experiences with top-notch quality and support.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/gallery" className="hover:text-gray-300">Gallery</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <Link href="#" className="duration-200 hover:scale-120 hover:text-blue-500"><FaFacebook/></Link>
              <Link href="#" className="duration-200 hover:scale-120 hover:text-pink-500"><FaInstagram/></Link>
              <Link href="#" className="duration-200 hover:scale-120 hover:text-red-500"><FaPinterest/></Link>
              <Link href="#" className="duration-200 hover:scale-120 hover:text-blue-500"><FaLinkedin/></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Brij Events . All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  