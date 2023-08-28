"use client";
import { useState, ChangeEvent } from "react";
import CepSearchForm from "../CepSearchForm";
import CepInfoCard from "../CepInfoCard";

interface CepInfo {
  state: string;
  city: string;
  neighborhood: string;
  street: string;
}

export default function CepServices() {
  const [cep, setCep] = useState<string>("");
  const [infosCep, setInfosCep] = useState<CepInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  const findCepInfos = async () => {
    if (cep !== "" && cep.length === 8) {
      try {
        const response = await fetch(
          `https://brasilapi.com.br/api/cep/v1/${cep}`
        );
        const infoCep: CepInfo = await response.json();
        setInfosCep(infoCep);
        setError(null);
      } catch (error) {
        console.error("Erro ao buscar informações de CEP:", error);
        setError("Cep não encontrado");
      }
    } else {
      setError("Cep inválido, digite 8 números");
    }
  };

  return (
    <>
      <CepSearchForm
        cep={cep}
        handleChange={handleChange}
        findCepInfos={findCepInfos}
      />
      {infosCep ? (
        <CepInfoCard infosCep={infosCep} />
      ) : (
        <h1 className="text-red-500 font-bold">{error}</h1>
      )}
    </>
  );
}
