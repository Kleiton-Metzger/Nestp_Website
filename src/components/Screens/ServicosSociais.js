import React from "react";

const servicos = [
  {
    name: "Segurança Social",
    image: "./seguranca-social.jpg",
    link: "https://www.seg-social.pt/inicio",
    contact: "(+351) 300 516 300",
    services: "Requemento de Número de Segurança Social, Subsidios, etc.",
    locationLink: "https://maps.app.goo.gl/L1oKL2BAt6VSP87V7",
  },
  {
    name: "Finanças",
    image: "./Financa.png",
    link: "https://www.portaldasfinancas.gov.pt/at/html/index.html",
    contact: "(+351) 273 310 240",
    services: "Requemento de Número de Contribuinte(NIF), IRS, etc.",
    locationLink: "https://maps.app.goo.gl/vJjpwTa8K11QeGk89",
  },
  {
    name: "UCSP Santa Maria 2",
    image: "./CS-STM.png",
    link: "https://shorturl.at/ZRfdC",
    contact: "(+351) 273 302 622",
    services: "Consultas de Medicina Geral e requerimento de Número de Utente.",
    locationLink: "https://maps.app.goo.gl/6j2gMuy9HssmueZF7",
  },
  {
    name: "UCSP da Sé",
    image: "./CS-SE.JPG",
    link: "https://shorturl.at/YywuA",
    contact: "(+351) 273 302 420",
    services: "Consultas de Medicina Geral e requerimento de Número de Utente.",
    locationLink: "https://maps.app.goo.gl/iJ33TB1LfJEUhnYJ6",
  },
  {
    name: "Município de Bragança",
    image: "./MB-CAMARA.png",
    link: "https://www.cm-braganca.pt/pages/87",
    contact: "(+351) 273 304 200",
    services: "Apoio a Imigrantes e requerimento de Atestados de Residência.",
    locationLink: "https://maps.app.goo.gl/CYFYYLj1f5etZXwQ8",
  },
  {
    name: "AIMA",
    image: "./aima.png",
    link: "https://aima.gov.pt/pt",
    contact: "(+351) 217 115 000",
    sef: "(+351) 273 300 010",
    services: "Apoio a Imigrantes e requerimento de Autorização de Residência.",
    locationLink: "https://maps.app.goo.gl/x2SPtifPWj3ut5fR8",
  },
];

const ServicosSociais = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-0 sm:bg-white sm:dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Serviços Sociais do Município de Bragança!
        </h1>
        <p className="text-lg leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
          O Nucleo de Estudantes Santomemses em Bragança (NESTP) sabe que no
          inicio de uma nova etapa da vida, como a entrada no ensino superior, é
          importante conhecer os serviços sociais disponíveis na cidade.
        </p>
        <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
          Aqui podes encontrar informações sobre a Segurança Social, Finanças,
          Centro de Saúde e outros serviços que te podem ser úteis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {servicos.map((servico) => (
            <div
              key={servico.name}
              className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={servico.image}
                alt={servico.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold dark:text-white">
                  <a
                    href={servico.link}
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    {servico.name}
                  </a>
                </h2>
                <p className="text-gray-600 font-bold dark:text-gray-300">
                  Contacto: {servico.contact}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Serviços: {servico.services}
                </p>
                {servico.sef && (
                  <p className="text-gray-600 dark:text-gray-400">
                    SEF: {servico.sef}
                  </p>
                )}
                <p>
                  <a
                    href={servico.locationLink}
                    className="text-blue-500 hover:underline dark:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Localização
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicosSociais;
