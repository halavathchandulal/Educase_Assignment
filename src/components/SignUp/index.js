import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {FaRegEyeSlash} from 'react-icons/fa'

import Headers from '../Headers'

import {
  ButtonsContainer,
  CheckBox,
  CheckBoxContainer,
  ErrorMessage,
  FormContainer,
  GreetingMessage,
  Input,
  Label,
  LoginButton,
  MainHeading,
  Paragraph,
  PasswordConatiner,
  PasswordInput,
  PasswordInputContainer,
  ShowButton,
  SignUpContainer,
  SocialButton,
  SocialImg,
} from './styledComponents'

const SignUp = () => {
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
    console.log('success')

    const newuser = {username, password}

    // Retrieve existing users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('usersData')) || []
    // Add the new user to the array
    storedUsers.push(newuser)
    // Save the updated array back to localStorage
    localStorage.setItem('usersData', JSON.stringify(storedUsers))

    navigate('/home')
  }

  return (
    <SignUpContainer>
      <Headers />
      <MainHeading>Hello!</MainHeading>
      <GreetingMessage>
        {errors.username
          ? "Welcome back You've been missed"
          : 'Sign up to get started'}
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
          <PasswordInputContainer>
            <PasswordInput
              type={showPassword ? 'text' : 'password'}
              value={password}
              isTrue={errors.password}
              onChange={onChangePassword}
            />
            <ShowButton onClick={onClickShowPassword}>
              <FaRegEyeSlash />
            </ShowButton>
          </PasswordInputContainer>
          {errors.password && <ErrorMessage>*Invalid Password</ErrorMessage>}
        </PasswordConatiner>
        <CheckBoxContainer>
          <CheckBox id='checkbox' type='checkbox' />
          <Label htmlFor='checkbox'>Remember me</Label>
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
        Already have an account?{' '}
        <a href='#Login' className='link'>
          Login
        </a>
      </Paragraph>
    </SignUpContainer>
  )
}

export default SignUp
