/** @jsxImportSource @emotion/react */

interface FormGroupProps {
  label?: string;
  htmlFor?: string;
  children?: React.ReactNode;
  errorMessage?: string;
  className?: string;
}

const FormGroup = (props: FormGroupProps) => {
  const { label = 'label', htmlFor, children, errorMessage, className } = props;
  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={htmlFor}>{label}:</label>
      {children}
      <span role='alert' css={{ color: 'red' }}>
        {errorMessage}
      </span>
    </div>
  );
};

export default FormGroup;
