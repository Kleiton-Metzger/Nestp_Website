import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline"; // Importação da versão 2

const Sport = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-0 sm:bg-white">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <ExclamationCircleIcon className="h-16 w-16 text-yellow-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Site em manutenção.
        </h1>
        <p className="text-gray-600 mb-6">
          Pedimos desculpa pelo incómodo e agradecemos a sua compreensão. Por
          favor, tente novamente mais tarde.
        </p>
      </div>
    </div>
  );
};

export default Sport;
