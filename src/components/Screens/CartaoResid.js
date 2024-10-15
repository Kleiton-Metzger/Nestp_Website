import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const CartaoResid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-0 sm:bg-white sm:dark:bg-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900 dark:text-white">
          Autorização de Residência Emitida a Estudantes do Ensino
          Superior/Profissional
        </h1>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300 ease-in-out"
            onClick={toggleAccordion}
          >
            <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200">
              Documentos Necessários
            </h2>
            <span className="text-gray-500 dark:text-gray-400 text-xl">
              {isOpen ? (
                <ChevronUpIcon className="w-6 h-6" />
              ) : (
                <ChevronDownIcon className="w-6 h-6" />
              )}
            </span>
          </div>

          <div
            ref={contentRef}
            className="transition-all duration-500 ease-in-out overflow-hidden bg-gray-90 dark:bg-gray-900"
            style={{ maxHeight: "0px" }}
          >
            <div className="p-4 border-t border-gray-300 dark:border-gray-600">
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-300 mb-4">
                O Cartão de Residência é um documento emitido pelo Serviço de
                Estrangeiros e Fronteiras (SEF agora AIMA) que comprova a
                legalidade da permanência em Portugal de cidadãos estrangeiros.
                Este documento é obrigatório para todos os cidadãos estrangeiros
                que pretendam residir em Portugal por um período superior a 3
                meses.
              </p>
              <ul className="text-base sm:text-lg text-gray-500 dark:text-gray-300 mb-4 list-disc list-inside">
                <li>Passaporte ou outro documento de viagem válido;</li>
                <li>
                  Visto de residência, exceto no pedido de concessão de
                  autorização de residência sem visto;
                </li>
                <li>
                  Atestado de Residência ou outro documento comprovativo da
                  residência em território nacional;
                </li>
                <li>Comprovativo de meios de subsistência;</li>
                <li>Comprovativo de inscrição nas Finanças;</li>
                <li>Comprovativo de inscrição na Segurança Social;</li>
                <li>
                  Comprovativo em como se encontra abrangido pelo Serviço
                  Nacional de Saúde ou seguro de saúde;
                </li>
                <li>
                  Declaração do estabelecimento de ensino em como se encontra a
                  frequentar o curso e tem o pagamento das propinas em dia;
                </li>
                <li>
                  Duas fotografias iguais, tipo passe, a cores e fundo liso,
                  atualizadas e com boas condições de identificação (caso o
                  agendamento se realize nas Lojas AIMA em Odivelas ou em
                  Aveiro);
                </li>
                <li>
                  Registo Criminal do país da nacionalidade da pessoa que requer
                  ou registo criminal do país onde o cidadão residia há mais de
                  um ano, antes de residir em Portugal, devidamente autenticado;
                </li>
              </ul>
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-300 mb-4">
                O Cartão de Residência é um documento pessoal e intransmissível
                que deve ser renovado sempre que expire. A não renovação do
                Cartão de Residência pode resultar na perda do direito de
                residência em Portugal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartaoResid;
