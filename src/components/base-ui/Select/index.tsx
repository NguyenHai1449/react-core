/** @jsxImportSource @emotion/react */
import ReactSelect from 'react-select';
import { Path, Controller, Control } from 'react-hook-form';
import { IFormValues } from '../../form/register';
import { IOption } from '../../../types/common';

interface SelectProps {
  label: string;
  name: Path<IFormValues>;
  control: Control<IFormValues, any>;
  options: IOption[];
  placeholder?: string;
  errorMessage?: string;
}

const Select = ({
  name,
  label,
  control,
  errorMessage,
  options
}: SelectProps) => {
  return (
    <>
      <label
        css={{
          display: 'block',
          marginBottom: 5
        }}
        htmlFor={name}
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, ...fieldProps } }) => (
          <ReactSelect
            {...fieldProps}
            id={name}
            isClearable
            options={options}
            css={{
              width: '100%'
            }}
            value={options.find((val) => val.value === value)}
            onChange={(option) => onChange(option ? option.value : '')}
          />
        )}
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

export default Select;
