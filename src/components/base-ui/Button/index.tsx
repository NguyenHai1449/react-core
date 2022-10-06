/** @jsxImportSource @emotion/react */

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit';
  Icon?: any;
  onClick?: () => void;
}

const Button = ({ type = 'button', text, Icon, ...props }: ButtonProps) => {
  return (
    <>
      <button
        {...props}
        type={type}
        css={{
          padding: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}
      >
        {Icon && <Icon />}
        <span>{text}</span>
      </button>
    </>
  );
};

export default Button;
