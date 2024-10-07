import React, { useState } from "react";

const Accommodation = () => {
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [distanceToSchool, setDistanceToSchool] = useState("0");
  const [accommodationType, setAccommodationType] = useState("apartamento");

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-white">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-2xl border border-gray-300">
        {/* Container para os filtros organizados em 2 colunas */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Cidade */}
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-800 font-semibold">
              Cidade
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <option value="0">Selecionar Cidade</option>
              <option value="braganca">Bragança</option>
              <option value="mirandela">Mirandela</option>
            </select>
          </div>

          {/* Tipo de Alojamento */}
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-800 font-semibold">
              Tipo de Alojamento:
            </label>
            <select
              value={accommodationType}
              onChange={(e) => setAccommodationType(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <option value="0">Selecionar Tipo</option>
              <option value="apartamento">Apartamento</option>
              <option value="quarto">Quarto</option>
              <option value="estudio">Quarto Compartilhado</option>
            </select>
          </div>

          {/* Filtro de Preço */}
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-800 font-semibold">
              Preço:
            </label>
            <div className="flex items-center">
              <div className="relative w-full mr-2">
                <input
                  type="number"
                  min="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  placeholder="Mínimo"
                  className="w-full p-2 pl-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <span className="absolute left-2 top-2 text-gray-700">€</span>
              </div>
              <span className="self-center text-gray-700">-</span>
              <div className="relative w-full">
                <input
                  type="number"
                  min="0"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  placeholder="Máximo"
                  className="w-full p-2 pl-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <span className="absolute left-2 top-2 text-gray-700">€</span>
              </div>
            </div>
          </div>

          {/* Distância da Escola */}
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-800 font-semibold">
              Distância da Escola:
            </label>
            <select
              value={distanceToSchool}
              onChange={(e) => setDistanceToSchool(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <option value="0">Seleciona a Distância</option>
              <option value="1">0-1 km</option>
              <option value="2">1-2 km</option>
              <option value="3">2-3 km</option>
              <option value="4">3-4 km</option>
              <option value="5">Mais de 4 km</option>
            </select>
          </div>
        </div>

        {/* Botão de Procurar */}
        <button className="w-full p-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105">
          Procurar
        </button>
      </div>
    </div>
  );
};

export default Accommodation;
