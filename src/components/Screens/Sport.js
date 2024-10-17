import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const Sport = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-0 sm:bg-white sm:dark:bg-gray-800">
      <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md text-center">
        <ExclamationCircleIcon className="h-16 w-16 text-yellow-500 dark:text-yellow-400 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Site em manutenção.
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Pedimos desculpa pelo incómodo e agradecemos a sua compreensão. Por
          favor, tente novamente mais tarde.
        </p>
      </div>
    </div>
  );
};

export default Sport;
