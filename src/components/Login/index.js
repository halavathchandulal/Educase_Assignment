import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {FaRegEyeSlash} from 'react-icons/fa'

import Headers from '../Headers'

import {
  ButtonsContainer,
  CheckBox,
  CheckBoxContainer,
  ErrorMessage,
  ForgetPassword,
  FormContainer,
  GreetingMessage,
  HeadingBlue,
  Input,
  Label,
  LoginButton,
  LoginContainer,
  MainHeading,
  Paragraph,
  PasswordConatiner,
  PasswordInput,
  PasswordInputContainer,
  ShowButton,
  SocialButton,
  SocialImg,
} from './styledComponents'

const storedData = JSON.parse(localStorage.getItem('usersData'))

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({username: false, password: false})
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const onchangeUserName = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const validateData = () => {
    const newError = {}
    if (!username) {
      newError.username = true
    }
    if (!password) {
      newError.password = true
    }
    setErrors(newError)
    return Object.keys(newError).length === 0
  }

  const onSubmitForm = event => {
    event.preventDefault()
    if (!validateData()) return

    console.log(username === storedData.username)
    if (username === storedData.username || password === storedData.password) {
      console.log('success')
      navigate('/home')
    } else {
      console.log('redirected')
      navigate('/signup')
    }
  }

  return (
    <LoginContainer>
      <Headers />
      <MainHeading>Hello</MainHeading>
      <HeadingBlue>Again!</HeadingBlue>
      <GreetingMessage>
        Welcome back You've <br /> been missed
      </GreetingMessage>
      <FormContainer onSubmit={onSubmitForm}>
        <Label htmlFor='username'>Username*</Label>
        <Input
          id='username'
          type='text'
          value={username}
          isTrue={errors.username}
          onChange={onchangeUserName}
        />
        {errors.username && <ErrorMessage>*Invalid Username</ErrorMessage>}
        <PasswordConatiner>
          <Label htmlFor='password'>Password*</Label>
          <PasswordInputContainer isTrue={errors.password}>
            <PasswordInput
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={onChangePassword}
            />
            <ShowButton onClick={onClickShowPassword}>
              <FaRegEyeSlash />
            </ShowButton>
          </PasswordInputContainer>
          {errors.password && <ErrorMessage>*Invalid Password</ErrorMessage>}
        </PasswordConatiner>
        <CheckBoxContainer>
          <CheckBoxContainer>
            <CheckBox id='checkbox' type='checkbox' />
            <Label htmlFor='checkbox'>Remember me</Label>
          </CheckBoxContainer>

          <ForgetPassword>Forgot the password ?</ForgetPassword>
        </CheckBoxContainer>
        <LoginButton type='submit'>Login</LoginButton>
      </FormContainer>
      <Paragraph>or continue with</Paragraph>
      <ButtonsContainer>
        <SocialButton type='button'>
          <SocialImg
            src='https://res.cloudinary.com/dj2tk6c0s/image/upload/v1716100997/newsapp/Icon_2_dcaid4.png'
            alt='facebook'
          />
          Facebook
        </SocialButton>
        <SocialButton type='button'>
          <SocialImg
            src='https://res.cloudinary.com/dj2tk6c0s/image/upload/v1716100996/newsapp/Icon_3_ufznvh.png'
            alt='google'
          />
          Google
        </SocialButton>
      </ButtonsContainer>

      <Paragraph>
        Already have an account ?{' '}
        <a href='#Login' className='link'>
          Login
        </a>
      </Paragraph>
    </LoginContainer>
  )
}

export default Login
