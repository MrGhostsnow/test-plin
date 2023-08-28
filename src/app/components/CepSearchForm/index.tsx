import React, { ChangeEvent, MouseEventHandler } from "react";

interface CepSearchFormProps {
  cep: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  findCepInfos: MouseEventHandler<HTMLButtonElement>;
}

const CepSearchForm: React.FC<CepSearchFormProps> = ({
  cep,
  handleChange,
  findCepInfos,
}) => {
  return (
    <section className="py-6">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <input
          className="border rounded mb-2 md:mb-0 md:mr-2 px-4 py-2 focus:outline-none text-black font-bold"
          type="text"
          value={cep}
          onChange={handleChange}
          placeholder="Digite o CEP (8 números)"
        />
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded focus:outline-none"
          type="button"
          onClick={findCepInfos}
        >
          Pesquisar
        </button>
      </div>
    </section>
  );
};

export default CepSearchForm;
