/** @jsxImportSource @emotion/react */

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../../base-ui/Input';
import Select from '../../base-ui/Select';
import DatePicker from '../../base-ui/DatePicker';
import { ageOptions } from '../../../constants/common';

export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  birthday: Date;
  password: string;
  confirmPassword: string;
  isAgree: boolean;
}

const divStyle = {
  marginBottom: 15
};

const grid = {
  display: 'grid',
  gap: 10,
  marginBottom: 15,
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
};

const schema = yup
  .object({
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.string().required('Please enter your last name'),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Please enter your email'),
    age: yup.string().required('Please enter your age'),
    birthday: yup
      .date()
      .typeError('Please enter a valid date')
      .required('Please enter your birthday')
      .min('1969-11-13', 'Date is too early'),
    password: yup
      .string()
      .required('Please enter your password')
      .matches(
        // no-useless-escape
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character'
      ),
    confirmPassword: yup
      .string()
      .required('Please confirm your password')
      .oneOf([yup.ref('password'), null], "Passwords don't match.")
  })
  .required();

const RegisterForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm<IFormValues>({
    mode: 'all',
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: IFormValues) => {
    console.log(data);
    if (!data.isAgree) {
      setError('isAgree', {
        type: 'custom',
        message: 'Please agree to the terms and conditions'
      });
      return;
    }
    // await register(data);
    reset();
  };

  return (
    <form css={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <div css={grid}>
        <div>
          <Input
            label='First Name'
            field='firstName'
            register={register}
            errorMessage={errors.firstName?.message}
          />
        </div>
        <div>
          <Input
            label='Last Name'
            field='lastName'
            register={register}
            errorMessage={errors.lastName?.message}
          />
        </div>
      </div>

      <div css={divStyle}>
        <Input
          label='Email'
          field='email'
          register={register}
          errorMessage={errors.email?.message}
        />
      </div>

      <div css={divStyle}>
        <Select
          label='Age'
          name='age'
          control={control}
          options={ageOptions}
          errorMessage={errors.age?.message}
        />
      </div>

      <div css={divStyle}>
        <DatePicker
          label='Birthday'
          name='birthday'
          control={control}
          errorMessage={errors.birthday?.message}
        />
      </div>

      <div css={grid}>
        <div>
          <Input
            type='password'
            label='Password'
            field='password'
            register={register}
            errorMessage={errors.password?.message}
          />
        </div>
        <div>
          <Input
            type='password'
            label='Confirm Password'
            field='confirmPassword'
            register={register}
            errorMessage={errors.confirmPassword?.message}
          />
        </div>
      </div>

      <div css={divStyle}>
        <div>
          <input id='remember' type='checkbox' {...register('isAgree')}></input>
          <label
            htmlFor='remember'
            className='ml-2 text-md font-medium text-gray-900'
          >
            I agree to the{' '}
            <span className='text-blue-600 hover:underline'>
              Terms and Conditions
            </span>
            .
          </label>
        </div>
        <span
          css={{
            color: 'red'
          }}
        >
          {errors.isAgree?.message}
        </span>
      </div>

      <input
        css={{
          color: 'white',
          borderRadius: 5,
          padding: 10,
          backgroundColor: 'rgb(26, 86, 219)'
        }}
        type='submit'
        value='Register'
      />
    </form>
  );
};

export default RegisterForm;
