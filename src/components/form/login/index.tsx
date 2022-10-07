/** @jsxImportSource @emotion/react */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../base-ui/Input';
import { buttonSubmit, marginBottom } from '../register/index.styles';
import { Link } from 'react-router-dom';

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
        // no-useless-escape
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character'
      )
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormValues>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: IFormValues) => {
    console.log(data);

    // await login(data);
    reset();
  };

  return (
    <form css={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <div css={marginBottom}>
        <Input
          name='email'
          label='Email'
          registerField={register('email')}
          errorMessage={errors.email?.message}
        />
      </div>

      <div css={marginBottom}>
        <Input
          name='password'
          type='password'
          label='Password'
          registerField={register('password')}
          errorMessage={errors.password?.message}
        />
      </div>

      <input css={buttonSubmit} type='submit' value='Login' />

      <div>
        Don't have an account?
        <Link to='/register'>Sign up</Link>
      </div>
    </form>
  );
};

export default LoginForm;
