/** @jsxImportSource @emotion/react */
interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  isChecked?: boolean;
  handleChange: (id: string) => void;
}

const Radio = (props: RadioProps) => {
  const { text = 'label', id, isChecked, handleChange, ...rest } = props;
  return (
    <div>
      <input
        {...rest}
        id={id}
        type="radio"
        checked={isChecked}
        onChange={e => handleChange(e.currentTarget.id)}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default Radio;
