import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"; // Atualização para a versão 2

const CartaoResid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Usado para referenciar o conteúdo interno

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Ao abrir, definimos a altura real do conteúdo
    if (isOpen) {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        Autorização de Residência Emitida a Estudantes do Ensino
        Superior/Profissional
      </h1>

      <div className="bg-gray-100 rounded-lg shadow-md">
        {/* Cabeçalho da seção com efeito hover */}
        <div
          className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-300 ease-in-out"
          onClick={toggleAccordion}
        >
          <h2 className="text-xl sm:text-2xl text-gray-700">
            Documentos Necessários
          </h2>
          {/* Ícone que muda de acordo com o estado */}
          <span className="text-gray-500 text-xl">
            {isOpen ? (
              <ChevronUpIcon className="w-6 h-6" />
            ) : (
              <ChevronDownIcon className="w-6 h-6" />
            )}
          </span>
        </div>

        {/* Conteúdo que aparece ao expandir com efeito de transição */}
        <div
          ref={contentRef}
          className="transition-all duration-500 ease-in-out overflow-hidden"
          style={{ height: "0px" }} // Inicialmente a altura é zero
        >
          <div className="p-4 border-t border-gray-300">
            <p className="text-base sm:text-lg text-gray-500 mb-4">
              O Cartão de Residência é um documento emitido pelo Serviço de
              Estrangeiros e Fronteiras (SEF agora AIMA) que comprova a
              legalidade da permanência em Portugal de cidadãos estrangeiros.
              Este documento é obrigatório para todos os cidadãos estrangeiros
              que pretendam residir em Portugal por um período superior a 3
              meses.
            </p>
            <ul className="text-base sm:text-lg text-gray-500 mb-4 list-disc list-inside">
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
                Comprovativo em como se encontra abrangido pelo Serviço Nacional
                de Saúde ou seguro de saúde;
              </li>
              <li>
                Declaração do estabelecimento de ensino em como se encontra a
                frequentar o curso e tem o pagamento das propinas em dia;
              </li>
              <li>
                Duas fotografias iguais, tipo passe, a cores e fundo liso,
                atualizadas e com boas condições de identificação (caso o
                agendamento se realize nas Lojas AIMA em Odivelas ou em Aveiro);
              </li>
              <li>
                Registo Criminal do país da nacionalidade da pessoa que requer
                ou registo criminal do país onde o cidadão residia há mais de um
                ano, antes de residir em Portugal, devidamente autenticado;
              </li>
            </ul>
            <p className="text-base sm:text-lg text-gray-500 mb-4">
              O Cartão de Residência é um documento pessoal e intransmissível
              que deve ser renovado sempre que expire. A não renovação do Cartão
              de Residência pode resultar na perda do direito de residência em
              Portugal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartaoResid;
