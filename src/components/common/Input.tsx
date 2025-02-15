import React from "react";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  className?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { value, onChange, type, className, placeholder, onKeyDown } = props;
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`outline-none border-2 border-amber-300 p-1 border-none ${className}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
