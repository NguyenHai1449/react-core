/** @jsxImportSource @emotion/react */
import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { errorColor, inputStyle, labelStyle } from './index.style';

interface InputProps {
  name: string;
  label: string;
  registerField: UseFormRegisterReturn;
  placeholder?: string;
  errorMessage?: string;
  type?: HTMLInputTypeAttribute;
}

const Input = ({
  name,
  label,
  placeholder,
  registerField,
  errorMessage,
  ...props
}: InputProps) => {
  return (
    <>
      <label htmlFor={name} css={labelStyle}>
        {label}
      </label>
      <input
        {...props}
        {...registerField}
        id={name}
        autoComplete='off'
        placeholder={placeholder}
        css={inputStyle}
      />
      <span css={errorColor}>{errorMessage}</span>
    </>
  );
};

export default Input;
