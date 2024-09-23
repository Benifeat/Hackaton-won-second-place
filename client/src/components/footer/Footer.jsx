import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const buttons = [
  { text: "FAQ", href: "#" },
  { text: "Help center", href: "#" },
  { text: "Privacy", href: "/privacy" },
  { text: "My account", href: "#" },
  { text: "Contact us", href: "/Contact" }, 
];

const socialLinks = [
  { href: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1", icon: <FaInstagram /> },
  { href: "https://www.facebook.com/?locale=he_IL", icon: <FaFacebookF /> },
  { href: "https://www.linkedin.com/", icon: <FaLinkedinIn /> },
  { href: "https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D", icon: <FaTwitter /> },
  { href: "https://www.youtube.com/", icon: <FaYoutube /> },
];

function Footer() {
  return (
    <div className="bottom-0 w-full bg-pink-950/15 dark:bg-pink-50/15 p-4 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {buttons.map((button, index) => (
          button.href.startsWith('/') ? (
            <Link
              key={index}
              to={button.href}
              className="text-lg font-medium text-gray-700 dark:text-gray-500 hover:text-gray-900 dark:hover:text-black transition-colors duration-200"
            >
              {button.text}
            </Link>
          ) : (
            <a
              key={index}
              href={button.href}
              className="text-lg font-medium text-gray-700 dark:text-gray-500 hover:text-gray-900 dark:hover:text-black transition-colors duration-200"
            >
              {button.text}
            </a>
          )
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-8">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-3xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
            aria-label="Social Media Link"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          © 2024 EZRATHAVER By Beni Visotski-Elen Lesovoy-Adi Elisha - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
