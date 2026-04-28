import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope ,FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

 function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold">
            OUTPRO<span className="text-green-400">.</span>INDIA
          </h2>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Engineering extraordinary sports & adventure experiences with precision, creativity, and passion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            

<ul className="space-y-2 text-gray-400 text-sm">
  <li className="hover:text-white cursor-pointer">
    <Link to="/">Home</Link>
  </li>
  <li className="hover:text-white cursor-pointer">
    <Link to="/about">About</Link>
  </li>
  <li className="hover:text-white cursor-pointer">
    <Link to="/services">Services</Link>
  </li>
  <li className="hover:text-white cursor-pointer">
    <Link to="/contact">Contact</Link>
  </li>
</ul>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Event Planning</li>
            <li>Marketing & Sponsorship</li>
            <li>Event Marketing</li>
            <li>Consulting</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>

          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <FaPhone /> +91 89572 39847
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <FaEnvelope /> outpro.india@gmail.com
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
  <FaMapMarkerAlt /> Jaipur, Rajasthan
</div>
          

          {/* Social */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://www.instagram.com/outpro.india/" target="_blank">
              <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            </a>
            <FaLinkedin className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Outpro.India. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;