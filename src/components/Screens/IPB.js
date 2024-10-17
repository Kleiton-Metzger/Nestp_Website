import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaLink,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"; // Importando os ícones

const escolas = [
  {
    name: "Escola Superior Agrária de Bragança",
    image: "agraria.jpg",
    link: "https://www.esa.ipb.pt",
    horario: "9:00 - 18:00",
    localizacao: "Bragança",
    telefone: "(+351) 273 303 200",
    email: "esa@ipb.pt",
    mapsLink:
      "https://www.google.com/maps?q=Escola+Superior+Agr%C3%A1ria+de+Bragan%C3%A7a", // Adicionei o link do Google Maps
  },
  {
    name: "Escola Superior de Educação de Bragança",
    image: "educacao.jpg",
    link: "https://www.ese.ipb.pt",
    horario: "9:00 - 17:00",
    localizacao: "Bragança",
    telefone: "(+351) 273 330 600",
    email: "eseb@ipb.pt",
    mapsLink:
      "https://www.google.com/maps?q=Escola+Superior+de+Educa%C3%A7%C3%A3o+de+Bragan%C3%A7a", // Adicionei o link do Google Maps
  },
  {
    name: "Escola Superior de Tecnologia e Gestão de Bragança",
    image: "tecnologia.png",
    link: "https://www.estig.ipb.pt",
    horario: "8:30 - 19:00",
    localizacao: "Bragança",
    telefone: "(+351) 273 303 000",
    email: "estig@ipb.pt",
    mapsLink:
      "https://www.google.com/maps?q=Escola+Superior+de+Tecnologia+e+Gest%C3%A3o+de+Bragan%C3%A7a", // Adicionei o link do Google Maps
  },
  {
    name: "Escola Superior de Comunicação, Administração e Turismo de Mirandela",
    image: "mirandela.jpg",
    link: "https://www.esact.ipb.pt",
    horario: "9:00 - 17:30",
    localizacao: "Mirandela",
    telefone: "(+351) 278 201 340",
    email: "esact@ipb.pt",
    mapsLink:
      "https://www.google.com/maps?q=Escola+Superior+de+Comunica%C3%A7%C3%A3o,+Administra%C3%A7%C3%A3o+e+Turismo+de+Mirandela", // Adicionei o link do Google Maps
  },
  {
    name: "Escola Superior de Saúde de Bragança",
    image: "saude.jpg",
    link: "https://www.essa.ipb.pt",
    horario: "9:00 - 17:00",
    localizacao: "Bragança",
    telefone: "(+351) 273 330 950",
    email: "essa@ipb.pt",
    mapsLink:
      "https://www.google.com/maps?q=Escola+Superior+de+Sa%C3%BAde+de+Bragan%C3%A7a", // Adicionei o link do Google Maps
  },
];

const plataformas = [
  {
    name: "IPB Virtual",
    link: "https://virtual.ipb.pt",
    icon: <FaLink className="mr-2" />,
  },
  {
    name: "IPB Online",
    link: "https://online.ipb.pt",
    icon: <FaLink className="mr-2" />,
  },
  {
    name: "Sumários",
    link: "https://sumarios.ipb.pt",
    icon: <FaLink className="mr-2" />,
  },
  {
    name: "Mentoring Academy",
    link: "https://mentoringacademy.ipb.pt/",
    icon: <FaLink className="mr-2" />,
  },
];

const servicosCentrais = [
  {
    name: "Serviços Académicos",
    image: "academicos.jpg",
    link: "https://portal3.ipb.pt/index.php/pt/sa/informacao-academica",
    horario:
      "Manhã: 9:00 - 12:00, Tarde: 14:00 - 16:00 (Encerra às terças e quintas à tarde)",
    localizacao: "Bragança",
    telefone: "(+351) 273 303 200",
    email: "saipb@ipb.pt",
    mapsLink: "https://maps.app.goo.gl/aQsKA7XwHTbNg7oG6", // Adicionei o link do Google Maps
  },
];

const IPB = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-0 sm:bg-white sm:dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {/* Descrição do IPB */}
        <h1 className="text-4xl font-extrabold text-center text-black-600 dark:text-white mb-2">
          Bem-vindo ao IPB!
        </h1>
        <h2 className="text-1xl font-semibold text-center text-gray-500 dark:text-gray-400 mb-6">
          O Politécnico dos Amigos para Sempre
        </h2>
        <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
          O Instituto Politécnico de Bragança é uma instituição pública de
          ensino superior, empenhada na oferta de formação de qualidade e na
          promoção de atividades de investigação e extensão com impacto no meio
          económico, social e cultural no Município de Bragança e regiões
          limítrofes.
        </p>

        {/* Grelha com as Escolas */}
        <h2 className="text-3xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
          Escolas do IPB
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {escolas.map((escola) => (
            <div
              key={escola.name}
              className="bg-gray-50 dark:bg-gray-700 border dark:border-gray-600 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={escola.image}
                alt={escola.name}
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {escola.name}
              </h3>
              <p className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                <FaMapMarkerAlt className="mr-2 text-red-600 dark:text-red-400" />
                <a
                  href={escola.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  {escola.localizacao}
                </a>
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                <FaClock className="mr-2 text-black-600 dark:text-gray-400" />{" "}
                {escola.horario}
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                <FaPhone className="mr-2 text-black-600 dark:text-gray-400" />{" "}
                {escola.telefone}
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <FaEnvelope className="mr-2 text-black-600 dark:text-gray-400" />{" "}
                {escola.email}
              </p>
              <a
                href={escola.link}
                className="flex items-center text-blue-500 dark:text-blue-400 hover:underline"
              >
                <FaLink className="mr-2" /> Visite o site
              </a>
            </div>
          ))}
        </div>

        {/* Grelha com as Plataformas */}
        <h2 className="text-3xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
          Plataformas do IPB
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {plataformas.map((plataforma) => (
            <div
              key={plataforma.name}
              className="bg-gray-50 dark:bg-gray-700 border dark:border-gray-600 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {plataforma.name}
              </h3>
              <a
                href={plataforma.link}
                className="flex items-center text-blue-500 dark:text-blue-400 hover:underline"
              >
                {plataforma.icon}Visite a plataforma
              </a>
            </div>
          ))}
        </div>

        {/* Grelha com os Serviços Centrais */}
        <h2 className="text-3xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
          Serviços Centrais
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {servicosCentrais.map((servico) => (
            <div
              key={servico.name}
              className="bg-gray-50 dark:bg-gray-700 border dark:border-gray-600 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={servico.image}
                alt={servico.name}
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {servico.name}
              </h3>
              <p className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                <FaMapMarkerAlt className="mr-2 text-red-600 dark:text-red-400" />
                <a
                  href={servico.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  {servico.localizacao}
                </a>
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                <FaClock className="mr-2 text-black-600 dark:text-gray-400" />{" "}
                {servico.horario}
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                <FaPhone className="mr-2 text-black-600 dark:text-gray-400" />{" "}
                {servico.telefone}
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <FaEnvelope className="mr-2 text-black-600 dark:text-gray-400" />{" "}
                {servico.email}
              </p>
              <a
                href={servico.link}
                className="flex items-center text-blue-500 dark:text-blue-400 hover:underline"
              >
                <FaLink className="mr-2" /> Visite o site
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IPB;
