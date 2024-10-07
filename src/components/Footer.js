import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <ul className="space-y-2">
              <li>
                <Link to="/ipb" className="hover:text-white">
                  IPB
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" className="hover:text-white">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-2">Contato</h4>
            <p className="text-gray-400">Email: info@exemplo.com</p>
            <p className="text-gray-400">Telefone: +351 123 456 789</p>
          </div>

          <div className="mb-4 md:mb-0">
            <h4 className="text-white text-lg font-semibold mb-2">Siga-nos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/groups/892541264125123/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook size={24} />
              </a>

              <a
                href="https://www.instagram.com/nestp_braganca/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} NESTP. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
