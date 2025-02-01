import React from 'react';
import { Input } from 'antd';

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 "
    />
  );
};

export default InputField;
