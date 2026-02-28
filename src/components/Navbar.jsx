import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Hammer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import path from "path";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("navHome"), path: "/" },
    { name: "Misson", path: "/misson" },
    { name: t("navServices"), path: "/services" },
    { name: t("navContact"), path: "/contact" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-secondary transition-colors duration-300">
            <Hammer className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-heading font-extrabold tracking-tighter text-primary">
            GN <span className="text-secondary">CONSTRUCTIONS</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold hover:text-secondary transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-secondary"
                  : "text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center gap-3 border-l pl-4">
            <button
              onClick={() => changeLanguage("en")}
              className="text-sm font-bold text-primary hover:text-secondary"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("fr")}
              className="text-sm font-bold text-primary hover:text-secondary"
            >
              FR
            </button>
          </div>

          <Link to="/contact" className="btn btn-primary px-5 py-2 text-sm">
            {t("getQuote")}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 md:hidden border-t"
          >
            <div className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-bold ${
                    location.pathname === link.path
                      ? "text-secondary"
                      : "text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Language Toggle */}
              <div className="flex gap-6 pt-4 border-t w-3/4 justify-center">
                <button
                  onClick={() => changeLanguage("en")}
                  className="font-bold text-primary"
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage("fr")}
                  className="font-bold text-primary"
                >
                  FR
                </button>
              </div>

              <Link
                to="/contact"
                className="btn btn-primary w-3/4 text-center"
                onClick={() => setIsOpen(false)}
              >
                {t("getQuote")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
