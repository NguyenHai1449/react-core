/** @jsxImportSource @emotion/react */
import { HTMLInputTypeAttribute } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../form/register';
import { errorColor, inputStyle, labelStyle } from './index.style';

interface InputProps {
  label: string;
  field: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  placeholder?: string;
  errorMessage?: string;
  type?: HTMLInputTypeAttribute;
}

const Input = ({
  field,
  label,
  placeholder,
  register,
  errorMessage,
  ...props
}: InputProps) => {
  return (
    <>
      <label css={labelStyle} htmlFor={field}>
        {label}
      </label>
      <input
        id={field}
        {...props}
        autoComplete='off'
        placeholder={placeholder}
        {...register(field)}
        css={inputStyle}
      />
      <span css={errorColor}>{errorMessage}</span>
    </>
  );
};

export default Input;
