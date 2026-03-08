import React from "react";
import { Link } from "react-router-dom";
import {
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              El<span className="text-yellow-500">Chapo</span>
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Premium streetwear and exclusive drops for the culture.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-500 transition"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-500 transition"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-500 transition"
              >
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/shop?category=caps"
                  className="text-gray-600 hover:text-yellow-500 transition"
                >
                  All Caps
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=apparel"
                  className="text-gray-600 hover:text-yellow-500 transition"
                >
                  Apparel
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-600 hover:text-yellow-500 transition"
                >
                  New Drops
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/brand-story"
                  className="text-gray-600 hover:text-yellow-500 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-yellow-500 transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-yellow-500 transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-600">
                <FiMail size={16} />
                <a
                  href="mailto:hello@elchapo.com"
                  className="hover:text-yellow-500 transition"
                >
                  hello@elchapo.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <FiPhone size={16} />
                <a
                  href="tel:+1234567890"
                  className="hover:text-yellow-500 transition"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Instagram Feed (Placeholder) */}
        <div className="mb-12">
          <h4 className="font-bold text-gray-900 mb-6">
            Follow Us
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gray-100 border border-gray-300 rounded-lg hover:opacity-80 transition cursor-pointer flex items-center justify-center"
              >
                <span className="text-gray-400 text-xs">@elchapo</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>&copy; 2024 EL CHAPO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-500 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              Shipping Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
