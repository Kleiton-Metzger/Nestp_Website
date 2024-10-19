import React from "react";
import {
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 dark:from-green-900 dark:via-yellow-900 dark:to-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Núcleo de Estudantes Santomenses em Bragança
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-gray-600 dark:text-gray-300 sm:text-2xl md:mt-5 md:max-w-3xl">
            Unidos pela cultura, Leve Leve fortalecidos pela educação.
          </p>
        </header>

        <section className="mb-16">
          <div className="prose prose-lg text-gray-500 dark:text-gray-300 mx-auto">
            <p>
              O Núcleo de Estudantes Santomenses em Bragança é uma comunidade
              inclusiva e acolhedora, dedicada a apoiar e enriquecer a
              experiência dos alunos de São Tomé e Príncipe em Bragança. Nosso
              objetivo principal é criar um ambiente de suporte mútuo, onde cada
              estudante possa prosperar academicamente e pessoalmente.
            </p>
            <p>
              Acreditamos na força da união e na importância de manter nossas
              raízes culturais vivas, mesmo estando longe de casa. Trabalhamos
              incansavelmente para promover a integração, o sucesso acadêmico e
              o bem-estar de todos os nossos membros.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <UserGroupIcon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Inclusão
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Valorizamos a diversidade e promovemos um ambiente onde todos se
                sintam bem-vindos e respeitados.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <AcademicCapIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Excelência Acadêmica
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Incentivamos e apoiamos o sucesso acadêmico de nossos membros.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <HeartIcon className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Solidariedade
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Cultivamos um espírito de ajuda mútua e companheirismo entre
                nossos membros e com a comunidade local.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <a
            href="/contato"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out"
          >
            Junte-se a Nós
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
