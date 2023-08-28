"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import ContactInput from "../ContactInput";

interface FormData {
  name: string;
  email: string;
  message: string;
  attachment: File | null;
}

interface FormSectionProps {
  onSubmit: (formData: FormData) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    attachment: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>
  ) => {
    const { name, value, files } = e.target;

    if (name === "attachment") {
      const file = files?.[0] || null;
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
      attachment: null,
    });
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <ContactInput
        label="Nome:"
        type="text"
        id="name"
        name="name"
        placeholder="Digite seu nome"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <ContactInput
        label="E-mail:"
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu e-mail"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <ContactInput
        label="Mensagem:"
        id="message"
        name="message"
        placeholder="Digite sua mensagem"
        value={formData.message}
        onChange={handleChange}
        textarea
        required
      />
      <ContactInput
        label="Anexar arquivo:"
        type="file"
        id="attachment"
        name="attachment"
        onChange={handleChange}
        accept="image/*, application/pdf"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded focus:outline-none"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormSection;
