import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { useDarkMode } from "../contexts/DarkModeContext";

const navigation = [
  { name: "Sobre Nós", href: "/sobre-nos" },
  {
    name: "Departamentos",
    submenu: true,
    subItems: [
      { name: "Cultura", href: "/cultura" },
      { name: "Desporto", href: "/desporto" },
    ],
  },
  { name: "Alojamento", href: "/alojamento" },
  {
    name: "Informações",
    submenu: true,
    subItems: [
      { name: "IPB", href: "/ipb" },
      { name: "Agenda", href: "/agenda" },
      { name: "Serviços Sociais Municipais", href: "/servicos-sociais" },
      { name: "Cartão de Residência", href: "/cartao-residencia" },
    ],
  },
  { name: "Contactos", href: "/contato" },
  { name: "Notícias", href: "/noticias" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);
  const navbarRef = useRef(null);

  const handleDropdownClick = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleNavigationClick = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleDropdownHover = (name) => {
    if (window.innerWidth >= 768) {
      setIsHovering(true);
      setOpenDropdown(name);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownLeave = () => {
    if (window.innerWidth >= 768) {
      setIsHovering(false);
      timeoutRef.current = setTimeout(() => {
        if (!isHovering) {
          setOpenDropdown(null);
        }
      }, 300); // Ajuste este valor conforme necessário
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mouseover", handleClickOutside);
    return () => {
      document.removeEventListener("mouseover", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 ease-in-out"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="/nestp_logo22.png.png"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleDropdownHover(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                {item.submenu ? (
                  <>
                    <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out">
                      {item.name}
                      <ChevronDownIcon className="h-4 w-4 ml-1 transition-transform duration-200 ease-in-out group-hover:rotate-180" />
                    </button>
                    {openDropdown === item.name && (
                      <div
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        <div className="py-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isDarkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => handleDropdownClick(item.name)}
                    className="w-full text-left text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
                  >
                    {item.name}
                    <ChevronDownIcon className="h-5 w-5 ml-1 inline transition-transform duration-200 ease-in-out" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900 transition duration-150 ease-in-out"
                          onClick={handleNavigationClick}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
                  onClick={handleNavigationClick}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
