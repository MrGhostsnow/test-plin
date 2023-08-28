import React, { ChangeEvent } from "react";

interface ContactInputProps {
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  required?: boolean;
  accept?: string;
}

const ContactInput: React.FC<ContactInputProps> = ({
  label,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  textarea,
  required,
  accept,
}) => {
  const InputComponent = textarea ? "textarea" : "input";

  return (
    <div className="mb-4">
      <label className="block font-medium mb-1 text-orange-500">{label}</label>
      <InputComponent
        type={type}
        id={id}
        name={name}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:none focus:border-orange-500 text-black "
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={textarea ? 4 : undefined}
        required={required}
        accept={accept}
      />
    </div>
  );
};

export default ContactInput;
