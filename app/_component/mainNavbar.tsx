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
          <div className="flex space-x-6">
            <nav className="flex space-x-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
              <Link href="/weddings" className="text-gray-700 hover:text-gray-900 font-medium">Weddings</Link>
              <Link href="/events" className="text-gray-700 hover:text-gray-900 font-medium">Events</Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium">Services</Link>
              <Link href="/about-us" className="text-gray-700 hover:text-gray-900 font-medium">About</Link>
            </nav>
            <nav className="flex space-x-4">
              <Link href="/reviews" className="text-gray-700 hover:text-gray-900 font-medium">Love Notes</Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium">Blog</Link>
              <Link href="https://weddingplannerbusinesscoach.com" className="text-gray-700 hover:text-gray-900 font-medium">Boutique</Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</Link>
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
  