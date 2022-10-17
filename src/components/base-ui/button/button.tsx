/** @jsxImportSource @emotion/react */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit';
  Icon?: any;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { value, Icon, ...rest } = props;
  return (
    <>
      <button
        {...rest}
        css={{
          padding: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        {Icon && <Icon />}
        <span>{value}</span>
      </button>
    </>
  );
};

export default Button;
