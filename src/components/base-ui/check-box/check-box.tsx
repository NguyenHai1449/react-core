/** @jsxImportSource @emotion/react */
import { UseFormRegisterReturn } from 'react-hook-form';

interface CheckBoxProps {
  id?: string;
  label?: string;
  registerField?: UseFormRegisterReturn;
  errorMessage?: string;
}

const CheckBox = (props: CheckBoxProps) => {
  const { label = 'label', id, registerField, errorMessage, ...rest } = props;
  return (
    <>
      <div>
        <input {...rest} id={id} {...registerField} aria-labelledby={id} type="checkbox" />
        <label htmlFor={id}>{label}</label>
      </div>
      <span css={{ color: 'red' }}>{errorMessage}</span>
    </>
  );
};

export default CheckBox;
