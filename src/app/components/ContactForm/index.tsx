"use client";
import React, { useState, useEffect } from "react";
import FormSection from "../FormSection";

const ContactForm: React.FC = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (formData: any) => {
    console.log("Dados do formulário:", formData);
    setShowSuccessMessage(true);
  };

  useEffect(() => {
    if (showSuccessMessage) {
      const timeout = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [showSuccessMessage]);

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center">
      <div className="w-full max-w-lg">
        {showSuccessMessage ? (
          <div className="bg-green-200 p-4 mb-4 text-center">
            Seu formulário foi enviado com sucesso!
          </div>
        ) : null}
        <FormSection onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default ContactForm;
