import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa6";
export default function MainNav() {
    return (
      <nav className="bg-white shadow-md py-4">
        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <Link href="/" className="flex relative left-6 items-center">
              <img
                src="/logo.png"
                alt="Brilliant"
                className="h-12"
                style={{ display: "block",transform:"scale(3.5)" }}
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>
          <div className="flex space-x-6  font-sm">
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-orange-900">Home</Link>
              <Link href="/events" className="text-gray-700 hover:text-orange-900 ">Events</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-orange-900">Gallery</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-900 ">About</Link>
            </nav>
            <nav className="flex space-x-6">
              <Link href="/reviews" className="text-gray-700 hover:text-orange-900 ">Love Notes</Link>
              <Link href="/blog" className="text-gray-700 hover:text-orange-900 ">Blog</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-900 ">Contact</Link>
            </nav>
          </div>
          <div className="flex space-x-4">
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
  