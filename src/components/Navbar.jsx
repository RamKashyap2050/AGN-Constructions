import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Hammer, ChevronDown, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openCategory, setOpenCategory] = useState(null); // for mobile
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const servicesData = t("services", { returnObjects: true });
  const isServicesArray = Array.isArray(servicesData);

  const categories = [
    {
      key: "interior",
      name: t("navInterior"),
      ids: ["bathroom", "kitchen", "basement", "drywall", "flooring", "ceramic", "stairs"],
    },
    {
      key: "exterior",
      name: t("navExterior"),
      ids: ["roofing"],
    },
    {
      key: "commercial",
      name: t("navCommercial"),
      ids: ["commercial", "restaurant"],
    },
  ].map((cat) => ({
    ...cat,
    services: isServicesArray
      ? servicesData.filter((s) => cat.ids.includes(s.id))
      : [],
  }));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenCategory(null);
  }, [location.pathname, location.hash]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const toggleCategory = (key) => {
    setOpenCategory((prev) => (prev === key ? null : key));
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
        <div className="hidden md:flex items-center space-x-6">

          {/* Home */}
          <Link
            to="/"
            className={`font-semibold hover:text-secondary transition-colors duration-200 ${
              location.pathname === "/" ? "text-secondary" : "text-primary"
            }`}
          >
            {t("navHome")}
          </Link>

          {/* Mission */}
          <Link
            to="/misson"
            className={`font-semibold hover:text-secondary transition-colors duration-200 ${
              location.pathname === "/misson" ? "text-secondary" : "text-primary"
            }`}
          >
            Mission
          </Link>

          {/* Category Dropdowns */}
          {categories.map((cat) => (
            <div key={cat.key} className="relative group">
              <button
                className={`flex items-center gap-1 font-semibold hover:text-secondary transition-colors duration-200 text-primary`}
              >
                {cat.name}
                <ChevronDown className="w-4 h-4 ml-0.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {cat.services.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                  {cat.services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services#${service.id}`}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Contact */}
          <Link
            to="/contact"
            className={`font-semibold hover:text-secondary transition-colors duration-200 ${
              location.pathname === "/contact" ? "text-secondary" : "text-primary"
            }`}
          >
            {t("navContact")}
          </Link>

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
            className="absolute top-full left-0 w-full bg-white shadow-xl py-4 md:hidden border-t overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col">
              {/* Home */}
              <Link
                to="/"
                className={`text-base font-bold px-8 py-3 ${
                  location.pathname === "/" ? "text-secondary" : "text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {t("navHome")}
              </Link>

              {/* Mission */}
              <Link
                to="/misson"
                className={`text-base font-bold px-8 py-3 ${
                  location.pathname === "/misson" ? "text-secondary" : "text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Mission
              </Link>

              {/* Category Dropdowns */}
              {categories.map((cat) => (
                <div key={cat.key} className="border-t border-gray-100">
                  <button
                    onClick={() => toggleCategory(cat.key)}
                    className="w-full flex items-center justify-between px-8 py-3 text-base font-bold text-primary hover:text-secondary transition-colors"
                  >
                    {cat.name}
                    {openCategory === cat.key ? (
                      <Minus size={18} className="flex-shrink-0" />
                    ) : (
                      <Plus size={18} className="flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openCategory === cat.key && cat.services.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50"
                      >
                        {cat.services.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services#${service.id}`}
                            className="block px-12 py-2.5 text-sm text-gray-600 hover:text-secondary font-medium transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setOpenCategory(null);
                            }}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Contact */}
              <Link
                to="/contact"
                className={`text-base font-bold px-8 py-3 border-t border-gray-100 ${
                  location.pathname === "/contact" ? "text-secondary" : "text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {t("navContact")}
              </Link>

              {/* Language + CTA */}
              <div className="border-t border-gray-100 mt-2 px-8 pt-4 pb-6 flex flex-col gap-4">
                <div className="flex gap-6">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="font-bold text-primary hover:text-secondary"
                  >
                    EN
                  </button>
                  <button
                    onClick={() => changeLanguage("fr")}
                    className="font-bold text-primary hover:text-secondary"
                  >
                    FR
                  </button>
                </div>
                <Link
                  to="/contact"
                  className="btn btn-primary text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {t("getQuote")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
