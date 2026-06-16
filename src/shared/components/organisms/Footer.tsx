import Link from "next/link";
import {
  Newspaper,
  Globe,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "@/assets/icons/icons";

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-red-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div className="pr-6 lg:border-r border-gray-200">
            <h1 className="text-3xl font-bold tracking-wide flex items-center mb-4">
              Nova
              <span className="mx-2 px-4 py-1 bg-red-700 text-white rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                News
              </span>
            </h1>

            <p className="text-gray-600 leading-7 text-sm">
              Stay informed with breaking news, politics, sports, technology,
              business and entertainment stories from around the world.
            </p>
          </div>

          {/* Categories */}
          <div className="px-0 lg:px-6 lg:border-r border-gray-200">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Newspaper size={18} />
              Categories
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="#" className="hover:text-red-700 transition">
                  Politics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-700 transition">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-700 transition">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-700 transition">
                  Business
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-700 transition">
                  Health
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="px-0 lg:px-6 lg:border-r border-gray-200">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Globe size={18} />
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/" className="hover:text-red-700 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-700 transition">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-700 transition">
                  Trending
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-700 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-700 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:pl-6">
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-3 rounded-full border border-gray-300 hover:bg-red-700 hover:text-white transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-3 rounded-full border border-gray-300 hover:bg-red-700 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="https://wa.me/201000000000"
                target="_blank"
                className="p-3 rounded-full border border-gray-300 hover:bg-red-700 hover:text-white transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </Link>

              <Link
                href="mailto:info@novanews.com"
                className="p-3 rounded-full border border-gray-300 hover:bg-red-700 hover:text-white transition-all duration-300"
              >
                <FaEnvelope size={18} />
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-5 leading-6">
              Follow Nova News on social media and stay updated with the latest
              headlines and breaking news.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Nova News. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-500">
            <Link href="#" className="hover:text-red-700 transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-red-700 transition">
              Terms of Service
            </Link>

            <Link href="#" className="hover:text-red-700 transition">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
