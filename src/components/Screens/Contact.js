import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="bg-[#e9ecef] shadow-lg rounded-lg p-6 sm:p-8 max-w-lg w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          Contactos NESTP
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Estamos aqui para ajudar! Entre em contacto através das informações
          abaixo:
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-3 text-xl" />
            <p className="text-gray-700">
              Centro Académico do IPB, 5300-252 Bragança
            </p>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-blue-500 mr-3 text-xl" />
            <p className="text-gray-700">(+351) 273 303 200</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-blue-500 mr-3 text-xl" />
            <p className="text-gray-700">
              <a
                href="mailto:contato@exemplo.com"
                className="text-blue-500 hover:underline"
              >
                contato@exemplo.com
              </a>
            </p>
          </div>
          <div className="flex items-center">
            <FaClock className="text-blue-500 mr-3 text-xl" />
            <p className="text-gray-700">Segunda a Sexta, 9:00 - 17:00</p>
          </div>
        </div>
      </div>

      {/* Seção de Mapa */}
      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          Localização
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2974.454594519082!2d-6.7676522!3d41.7969665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3a4a1fa91da6d7%3A0xf06ad609203e26ab!2sCentro%20Acad%C3%A9mico%20do%20IPB!5e0!3m2!1spt-PT!2spt!4v1727717904440!5m2!1spt-PT!2spt"
          title="Mapa de localização do NESTP"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
