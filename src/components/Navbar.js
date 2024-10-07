import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleDropdownClick = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleNavigationClick = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const renderSubItems = (subItems) => (
    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-gray-700">
      <div className="py-1">
        {subItems.map((subItem) => (
          <Link
            key={subItem.name}
            to={subItem.href}
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
            onClick={handleNavigationClick}
          >
            {subItem.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo no lado direito em dispositivos móveis */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <Link to="/">
              <img
                src="./nestp_logo22.png.png"
                alt="Logo"
                className="h-8 w-auto cursor-pointer"
                onClick={handleNavigationClick}
              />
            </Link>
          </div>

          {/* Botão Mobile Menu (Hamburger) no lado esquerdo */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Logo e menu para telas maiores */}
          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
            <div className="hidden sm:flex items-center">
              <Link to="/">
                <img
                  src="./nestp_logo22.png.png"
                  alt="Logo"
                  className="h-8 w-auto cursor-pointer"
                  onClick={handleNavigationClick}
                />
              </Link>
            </div>
            <div className="hidden sm:flex space-x-4 ml-6">
              <div className="flex space-x-4 items-center justify-center">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => handleDropdownClick(item.name)}
                          className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.name}{" "}
                          <ChevronDownIcon className="h-5 w-5 ml-1" />
                        </button>
                        {openDropdown === item.name &&
                          renderSubItems(item.subItems)}
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        onClick={handleNavigationClick}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-800 shadow-lg z-50">
          <div className="px-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}{" "}
                      <ChevronDownIcon className="h-5 w-5 ml-1 inline" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
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
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={handleNavigationClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
