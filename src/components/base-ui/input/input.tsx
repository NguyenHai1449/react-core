/** @jsxImportSource @emotion/react */
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  registerField?: UseFormRegisterReturn;
}

const Input = (props: InputProps) => {
  const { id, registerField, ...rest } = props;
  return (
    <>
      <input
        id={id}
        {...rest}
        {...registerField}
        aria-labelledby={id}
        css={{
          width: '100%',
          padding: '10px 5px',
          borderRadius: 4,
          border: '1px solid rgb(204, 204, 204)',
        }}
      />
    </>
  );
};

export default Input;
