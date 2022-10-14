/** @jsxImportSource @emotion/react */
import ReactSelect from 'react-select';
import { Controller, Control } from 'react-hook-form';
import { IOption } from '../../../types/common';

interface SelectProps {
  name?: string;
  control?: Control<any>;
  options?: IOption[];
  placeholder?: string;
}

const Select = (props: SelectProps) => {
  const { name = 'name', control, options = [], placeholder } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...fieldProps } }) => (
        <ReactSelect
          {...fieldProps}
          id={name}
          isClearable
          options={options}
          placeholder={placeholder}
          value={options.find(val => val.value === value)}
          onChange={option => onChange(option ? option.value : '')}
        />
      )}
    />
  );
};

export default Select;
