import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
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
          <div className="flex space-x-6">
            <nav className="flex space-x-4">
              <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
              <a href="/weddings" className="text-gray-700 hover:text-gray-900 font-medium">Weddings</a>
              <a href="/events" className="text-gray-700 hover:text-gray-900 font-medium">Events</a>
              <a href="/services" className="text-gray-700 hover:text-gray-900 font-medium">Services</a>
              <a href="/about-us" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
            </nav>
            <nav className="flex space-x-4">
              <a href="/reviews" className="text-gray-700 hover:text-gray-900 font-medium">Love Notes</a>
              <a href="/blog" className="text-gray-700 hover:text-gray-900 font-medium">Blog</a>
              <a href="https://weddingplannerbusinesscoach.com" className="text-gray-700 hover:text-gray-900 font-medium">Boutique</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
            </nav>
          </div>
          <div className="flex space-x-4">
            <Link href="#" target="_blank" className="text-gray-500 hover:text-pink-700">
                <FaInstagram/>
            </Link>
            <Link href="#" target="_blank" className="text-gray-500 hover:text-blue-700">
              <FaFacebookF/>
            </Link>
            <Link href="#" target="_blank" className="text-gray-500 hover:text-red-700">
              <FaPinterest/>
            </Link>
            <Link href="#" target="_blank" className="text-gray-500 hover:text-blue-700">
              <FaLinkedin/>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
  