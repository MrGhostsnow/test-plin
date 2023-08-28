"use client";
import FormSection from "../FormSection";

const ContactForm: React.FC = () => {
  const handleSubmit = (formData: any) => {
    console.log("Dados do formulário:", formData);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center">
      <div className="w-full max-w-lg">
        <FormSection onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default ContactForm;
