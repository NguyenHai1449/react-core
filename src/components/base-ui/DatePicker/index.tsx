/** @jsxImportSource @emotion/react */
import { Path, Controller, Control } from 'react-hook-form';
import { IFormValues } from '../../form/register';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  label: string;
  name: Path<IFormValues>;
  control: Control<IFormValues, any>;
  className?: string;
  placeholder?: string;
  errorMessage?: string;
}

const DatePicker = ({
  name,
  label,
  control,
  errorMessage,
  className
}: DatePickerProps) => {
  return (
    <div className={className}>
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
        render={({ field: { value, ...fieldProps } }) => {
          return (
            <ReactDatePicker
              id={name}
              {...fieldProps}
              selected={value as Date}
              placeholderText='Select date'
              css={{
                width: '100%',
                padding: '10px 5px',
                border: '1px solid rgb(204, 204, 204)',
                borderRadius: 4
              }}
            />
          );
        }}
      />
      <span
        css={{
          color: 'red'
        }}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default DatePicker;
