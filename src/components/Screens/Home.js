import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/saotome1.png", "/caogrande.png", "/bandeira.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Muda a imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <img
              key={img}
              src={img}
              alt={`Hero background ${index + 1}`}
              className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-green-700 mix-blend-multiply opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            Núcleo de Estudantes Santomenses em Bragança
          </h1>
          <p className="text-xl sm:text-2xl text-green-100 mb-10">
            Unidos pela cultura, fortalecidos pela educação
          </p>
          <Link
            to="/sobre-nos"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-green-700 bg-white hover:bg-green-50 transition duration-300"
          >
            Saiba Mais
            <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Estatísticas dos Estudantes */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            Estudantes Santomenses no IPB
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "1000",
                label: "Total de Estudantes",
                icon: UserGroupIcon,
              },
              {
                number: "700",
                label: "Licenciatura (1º Ciclo)",
                icon: AcademicCapIcon,
              },
              {
                number: "200",
                label: "Mestrado (2º Ciclo)",
                icon: AcademicCapIcon,
              },
              {
                number: "100",
                label: "Doutoramento (3º Ciclo)",
                icon: AcademicCapIcon,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-green-50 dark:bg-gray-700 rounded-lg p-6 text-center transform hover:scale-105 transition duration-300"
              >
                <stat.icon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <p className="text-4xl font-bold text-green-600 dark:text-green-400">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-gray-500 dark:text-gray-400">
            Ano Letivo 2023/24
          </p>
        </div>
      </section>

      {/* Notícias Recentes */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            Últimas Notícias
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={`/piquinapuina.png`}
                  alt={`Notícia ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Brevemente Título da Notícia..
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Brevemente descrição da notícia...
                  </p>
                  <Link
                    to={`/noticias`}
                    className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline"
                  >
                    Ler mais
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 dark:bg-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-6">Junte-se a Nós</h2>
          <p className="text-xl mb-10">
            Faça parte da nossa comunidade e enriqueça sua experiência acadêmica
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-green-600 bg-white hover:bg-green-50 transition duration-300"
          >
            Entre em Contato
            <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
