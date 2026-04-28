import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



function Navbar() {
    const navigate = useNavigate();
  
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Clients", path: "/clients" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        scrolled
          ? "bg-[#181C14]/90 backdrop-blur-lg shadow-lg"
          : "bg-[#181C14]/85 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h2 className="text-white font-bold text-lg sm:text-xl tracking-wide cursor-pointer" onClick={()=>navigate('/')}>
          OUTPRO<span className="text-green-400">.</span>INDIA
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.path}
                className="text-white font-semibold"
              >
                {item.name}
              </Link>

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
              bg-white/30 transition-all duration-300 
              group-hover:w-full rounded-full"></span>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-xl">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#181C14]/95 backdrop-blur-lg px-6 py-6 space-y-6 text-center">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-white text-lg font-semibold"
            >
              {item.name}
            </Link>
          ))}

          <Button />

        </div>
      )}
    </nav>
  );
}

export default Navbar;