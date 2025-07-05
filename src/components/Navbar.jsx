import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Highlight active section on scroll
  useEffect(() => {
    const sectionIds = ["services", "team", "testimonials", "about", "contact"];
    const handleScroll = () => {
      let found = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getActiveClass = (pathOrHash) => {
    if (pathOrHash === "/") {
      // Home is active if no section is active or if at the very top
      return !activeSection && window.scrollY < 100
        ? "text-blue-400 font-bold underline underline-offset-8"
        : "";
    }
    if (pathOrHash.startsWith("#")) {
      return activeSection === pathOrHash
        ? "text-blue-400 font-bold underline underline-offset-8"
        : "";
    }
    return "";
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-white">
      <div className="max-w-screen-2xl mx-auto px-16 py-2 flex justify-between items-center rounded-b-2xl shadow-md bg-white relative z-[61]">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToTop();
            navigate("/");
          }}
          className="cursor-pointer flex items-center group"
        >
          <img
            src="/logo2.jpg"
            className="h-12 max-w-[160px] w-auto object-contain block"
            alt=""
          />
        </a>

        {/* Desktop Nav (shows at sm and up) */}
        <div className="hidden sm:flex sm:items-center font-[Host_Grotesk] text-lg space-x-8 px-6 py-2 rounded-xl text-gray-800 whitespace-nowrap">
          <a
            href="#"
            className={`relative group transition-all duration-300 ${getActiveClass(
              "/"
            )}`}
            onClick={(e) => {
              e.preventDefault();
              handleScrollToTop();
            }}
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-blue-500">
              Home
            </span>
          </a>
          <a
            href="#services"
            className={`relative group transition-all duration-300 ${getActiveClass(
              "#services"
            )}`}
            onClick={(e) => handleAnchorClick(e, "#services")}
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-blue-500">
              Services
            </span>
          </a>
          <a
            href="#team"
            className={`relative group transition-all duration-300 ${getActiveClass(
              "#team"
            )}`}
            onClick={(e) => handleAnchorClick(e, "#team")}
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-blue-500">
              Team
            </span>
          </a>
          <a
            href="#testimonials"
            className={`relative group transition-all duration-300 ${getActiveClass(
              "#testimonials"
            )}`}
            onClick={(e) => handleAnchorClick(e, "#testimonials")}
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-blue-500">
              Testimonials
            </span>
          </a>
          <a
            href="#contact"
            className={`relative px-8 py-2.5 font-bold text-lg text-white rounded-xl group overflow-hidden transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 ${getActiveClass(
              "#contact"
            )}`}
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            {/* Professional gradient animation effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
            
            {/* Depth effect */}
            <span className="absolute inset-0 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"></span>
            
            {/* Subtle lift effect */}
            <span className="relative z-10 flex items-center justify-center gap-2 font-bold text-white transition-transform duration-300 group-hover:translate-y-[-2px]">
              Contact Now
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Mobile Icon (shows below sm) */}
        <div
          className="sm:hidden text-black text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Overlay and Sidebar */}
      <div className={`sm:hidden fixed inset-0 z-[60] ${menuOpen ? '' : 'pointer-events-none'}`}>
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${menuOpen ? 'opacity-50' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Sidebar */}
        <div 
          className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-gray-100 text-black font-bold  transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="h-full flex flex-col item-center gap-6 py-20">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                handleScrollToTop();
              }}
              className="text-xl hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                handleAnchorClick(e, "#about");
                setMenuOpen(false);
              }}
              className="text-xl text-bold hover:text-blue-600 transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={(e) => {
                handleAnchorClick(e, "#services");
                setMenuOpen(false);
              }}
              className="text-xl text-bold hover:text-blue-600 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#team"
              onClick={(e) => {
                handleAnchorClick(e, "#team");
                setMenuOpen(false);
              }}
              className="text-xl text-bold hover:text-blue-600 transition-colors duration-200"
            >
              Team
            </a>
            <a
              href="#testimonials"
              onClick={(e) => {
                handleAnchorClick(e, "#testimonials");
                setMenuOpen(false);
              }}
              className="text-xl text-bold hover:text-blue-600 transition-colors duration-200"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-xl text-bold hover:text-blue-600 transition-colors duration-200"
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