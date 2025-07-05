import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Highlight active section on scroll
  useEffect(() => {
    const sectionIds = ["home", "services", "team", "testimonials", "about", "contact"];
    const handleScroll = () => {
      // Header shadow effect
      setIsScrolled(window.scrollY > 20);
      
      // Active section detection
      let found = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = 120; // Offset for fixed header
          if (rect.top <= offset && rect.bottom >= offset) {
            found = `#${id}`;
            break;
          }
        }
      }
      
      // Special case for home section
      if (!found && window.scrollY < 100) {
        found = "#home";
      }
      
      setActiveSection(found);
      lastScrollY.current = window.scrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  }, [navigate]);

  const handleAnchorClick = useCallback((e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id.substring(1));
      if (el) {
        // Calculate offset for fixed header
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location, navigate]);

  const getActiveClass = useCallback((pathOrHash) => {
    if (pathOrHash === "/" || pathOrHash === "#home") {
      return activeSection === "#home" || (!activeSection && window.scrollY < 100)
        ? "text-blue-500 font-semibold"
        : "";
    }
    return activeSection === pathOrHash
      ? "text-blue-500 font-semibold"
      : "";
  }, [activeSection]);

  // Navigation data for DRY principle
  const navItems = [
    { id: "home", label: "Home", hash: "#home" },
    { id: "services", label: "Services", hash: "#services" },
    { id: "team", label: "Team", hash: "#team" },
    { id: "testimonials", label: "Testimonials", hash: "#testimonials" },
    { id: "about", label: "About Us", hash: "#about" },
  ];

  return (
    <div 
      className={`fixed top-0 w-full z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
      ref={menuRef}
    >
        <div className="max-w-screen-2xl mx-auto px-16 py-2 flex justify-between items-center rounded-b-2xl shadow-md bg-white relative z-[61]">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToTop();
          }}
          className="cursor-pointer flex items-center"
        >
          <img
            src="/logo2.jpg"
            className="h-10 md:h-12 w-auto max-w-[140px] md:max-w-[160px] transition-all duration-300"
            alt="Company Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center font-medium text-gray-800 space-x-1 lg:space-x-3 xl:space-x-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.hash}
              className={`px-3 py-2 rounded-lg transition-all duration-200 hover:text-blue-500 ${getActiveClass(item.hash)}`}
              onClick={(e) => handleAnchorClick(e, item.hash)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`ml-2 px-5 py-2.5 font-bold text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 hover:shadow-lg ${getActiveClass("#contact")}`}
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            <span className="flex items-center gap-1.5">
              Contact Now
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown - Top to Down Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 py-4 px-6 shadow-inner">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.hash}
                className={`px-4 py-3 rounded-lg text-lg transition-colors ${
                  getActiveClass(item.hash)
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "hover:bg-gray-50"
                }`}
                onClick={(e) => {
                  handleAnchorClick(e, item.hash);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            
            <a
              href="#contact"
              className={`mt-2 px-4 py-3 rounded-lg text-lg font-medium text-center text-white bg-gradient-to-r from-blue-500 to-indigo-500 ${
                getActiveClass("#contact") ? "ring-2 ring-blue-300" : ""
              }`}
              onClick={(e) => {
                handleAnchorClick(e, "#contact");
                setMenuOpen(false);
              }}
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;