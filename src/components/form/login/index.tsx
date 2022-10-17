/** @jsxImportSource @emotion/react */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../base-ui/input/input';
import { buttonSubmit, marginBottom } from '../register/index.styles';
import { Link } from 'react-router-dom';
import FormGroup from '../../base-ui/form-group/form-group';
import Button from '../../base-ui/button/button';

export interface IFormValues {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Please enter your email'),
    password: yup
      .string()
      .required('Please enter your password')
      .matches(
        // eslint-disable-next-line
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character',
      ),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormValues) => {
    console.log(data);

    // await login(data);
    reset();
  };

  return (
    <form css={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup
        label="Email"
        htmlFor="email"
        css={marginBottom}
        errorMessage={errors.email?.message}
      >
        <Input id="email" placeholder="Email" registerField={register('email')} />
      </FormGroup>

      <FormGroup
        label="Password"
        htmlFor="password"
        css={marginBottom}
        errorMessage={errors.password?.message}
      >
        <Input
          id="password"
          type="password"
          placeholder="Password"
          registerField={register('password')}
        />
      </FormGroup>

      <Button css={buttonSubmit} type="submit" value="Login" />

      <div>
        Don't have an account?<Link to="/register">Sign up</Link>
      </div>
    </form>
  );
};

export default LoginForm;
