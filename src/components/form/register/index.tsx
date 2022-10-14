/** @jsxImportSource @emotion/react */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../../base-ui/input/input';
import Select from '../../base-ui/select/select';
import DatePicker from '../../base-ui/date-picker/date-picker';
import { ageOptions } from '../../../constants/common';
import { buttonSubmit, gridStyle, marginBottom } from './index.styles';
import { Link } from 'react-router-dom';
import FormGroup from '../../base-ui/from-group/from-group';

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
        // eslint-disable-next-line
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character',
      ),
    confirmPassword: yup
      .string()
      .required('Please confirm your password')
      .oneOf([yup.ref('password'), null], "Passwords don't match."),
  })
  .required();

const RegisterForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<IFormValues>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormValues) => {
    console.log(data);
    if (!data.isAgree) {
      setError('isAgree', {
        type: 'custom',
        message: 'Please agree to the terms and conditions',
      });
      return;
    }
    // await register(data);
    reset();
  };

  return (
    <form css={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <div css={gridStyle}>
        <FormGroup label="First Name" htmlFor="firstName" errorMessage={errors.firstName?.message}>
          <Input id="firstName" placeholder="First Name" registerField={register('firstName')} />
        </FormGroup>

        <FormGroup label="Last Name" htmlFor="lastName" errorMessage={errors.lastName?.message}>
          <Input id="lastName" placeholder="Last Name" registerField={register('lastName')} />
        </FormGroup>
      </div>

      <FormGroup
        label="Email"
        htmlFor="email"
        css={marginBottom}
        errorMessage={errors.email?.message}
      >
        <Input id="email" placeholder="Email" registerField={register('email')} />
      </FormGroup>

      <FormGroup label="Age" htmlFor="age" css={marginBottom} errorMessage={errors.age?.message}>
        <Select name="age" placeholder="Age" control={control} options={ageOptions} />
      </FormGroup>

      <FormGroup
        label="Birthday"
        htmlFor="birthday"
        css={marginBottom}
        errorMessage={errors.birthday?.message}
      >
        <DatePicker placeholder="Birthday" name="birthday" control={control} />
      </FormGroup>

      <div css={gridStyle}>
        <FormGroup
          label="Password"
          htmlFor="password"
          css={marginBottom}
          errorMessage={errors.password?.message}
        >
          <Input id="password" placeholder="Password" registerField={register('password')} />
        </FormGroup>
        <FormGroup
          css={marginBottom}
          label="Confirm password"
          htmlFor="confirmPassword"
          errorMessage={errors.confirmPassword?.message}
        >
          <Input
            id="confirmPassword"
            placeholder="Confirm password"
            registerField={register('confirmPassword')}
          />
        </FormGroup>
      </div>

      <div css={marginBottom}>
        <div>
          <input id="remember" type="checkbox" {...register('isAgree')}></input>
          <label htmlFor="remember" className="ml-2 text-md font-medium text-gray-900">
            I agree to the{' '}
            <span className="text-blue-600 hover:underline">Terms and Conditions</span>.
          </label>
        </div>
        <span
          css={{
            color: 'red',
          }}
        >
          {errors.isAgree?.message}
        </span>
      </div>

      <input css={buttonSubmit} type="submit" value="Register" />

      <div>
        Already have an account?
        <Link to="/login">Log in</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
