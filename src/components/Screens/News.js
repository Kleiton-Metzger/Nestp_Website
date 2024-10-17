import React, { useState, useEffect } from "react";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Todas as categorias");
  const [filteredNews, setFilteredNews] = useState([]);

  const newsItems = [
    {
      id: 1,
      title: "Nova tecnologia revoluciona indústria",
      date: "15 Outubro 2024",
      image: "piquinapuina.png",
      category: "Tecnologia",
    },
    {
      id: 2,
      title: "Descoberta científica promissora",
      date: "11 Outubro 2024",
      image: "piquinapuina.png",
      category: "Ciência",
    },
    {
      id: 3,
      title: "Métodos inovadores de ensino",
      date: "10 Outubro 2024",
      image: "piquinapuina.png",
      category: "Educação",
    },
    {
      id: 4,
      title: "Avanços na inteligência artificial",
      date: "5 Outubro 2024",
      image: "piquinapuina.png",
      category: "Tecnologia",
    },
    {
      id: 5,
      title: "Pesquisa sobre mudanças climáticas",
      date: "1 Outubro 2024",
      image: "piquinapuina.png",
      category: "Ciência",
    },
  ];

  useEffect(() => {
    filterNews();
  }, [searchTerm, category]);

  const filterNews = () => {
    let filtered = newsItems;

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category !== "Todas as categorias") {
      filtered = filtered.filter((item) => item.category === category);
    }

    setFilteredNews(filtered);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-2">
        NOTÍCIAS
      </h1>
      <div className="h-1 w-24 bg-blue-500 mb-8"></div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar notícias..."
            className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-300"
            value={searchTerm}
            onChange={handleSearch}
          />
          <svg
            className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex space-x-4">
          <select
            className="border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-300"
            value={category}
            onChange={handleCategoryChange}
          >
            <option>Todas as categorias</option>
            <option>Tecnologia</option>
            <option>Ciência</option>
            <option>Educação</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredNews.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition duration-300 hover:shadow-xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {item.category}
              </span>
            </div>
            <div className="p-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {item.date}
              </p>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-500 transition duration-300">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {filteredNews.length === 0 && (
        <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
          Nenhuma notícia encontrada com os filtros atuais.
        </p>
      )}
    </div>
  );
};

export default News;
