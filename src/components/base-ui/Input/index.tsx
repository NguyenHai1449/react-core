/** @jsxImportSource @emotion/react */
import { HTMLInputTypeAttribute } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../form/register';
import { css } from '@emotion/react';

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
      <label htmlFor={field}>{label}</label>
      <input
        id={field}
        {...props}
        autoComplete='off'
        placeholder={placeholder}
        {...register(field)}
        css={{
          display: 'block',
          width: '100%',
          padding: 10
        }}
      />
      <span
        css={{
          color: 'red'
        }}
      >
        {errorMessage}
      </span>
    </>
  );
};

export default Input;
