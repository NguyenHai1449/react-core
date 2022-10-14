/** @jsxImportSource @emotion/react */
import { Controller, Control } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  name?: string;
  control?: Control<any>;
  placeholder?: string;
}

const DatePicker = (props: DatePickerProps) => {
  const { name = 'name', control, placeholder } = props;
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, ...fieldProps } }) => {
          return (
            <ReactDatePicker
              id={name}
              {...fieldProps}
              selected={value as Date}
              placeholderText={placeholder}
              css={{
                width: '100%',
                padding: '10px 5px',
                border: '1px solid rgb(204, 204, 204)',
                borderRadius: 4,
              }}
            />
          );
        }}
      />
    </>
  );
};

export default DatePicker;
