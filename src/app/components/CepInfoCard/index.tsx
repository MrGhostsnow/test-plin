import React from "react";

interface CepInfo {
  state: string;
  city: string;
  neighborhood: string;
  street: string;
}

interface CepInfoCardProps {
  infosCep?: CepInfo;
}

const CepInfoCard: React.FC<CepInfoCardProps> = ({ infosCep }) => {
  return (
    <div className="mt-4 p-4 md:w-1/4 border rounded shadow flex flex-col justify-center">
      <div className="mb-2">
        <h2 className="text-lg font-bold text-orange-500">Estado:</h2>
        <p className="text-black">{infosCep?.state}</p>
      </div>
      <div className="mb-2">
        <h2 className="text-lg font-bold text-orange-500">Cidade:</h2>
        <p className="text-black">{infosCep?.city}</p>
      </div>
      <div className="mb-2">
        <h2 className="text-lg font-bold text-orange-500">Bairro:</h2>
        <p className="text-black">{infosCep?.neighborhood}</p>
      </div>
      <div className="mb-2">
        <h2 className="text-lg font-bold text-orange-500">Rua:</h2>
        <p className="text-black">{infosCep?.street}</p>
      </div>
    </div>
  );
};

export default CepInfoCard;
