import {useNavigate} from 'react-router-dom'
import Headers from '../Headers'
import {
  AppLogo,
  AppLogoButton,
  OnBoardContainer,
  OnBoardContentContainer,
} from './styledComponents'

const Onboard = props => {
  const navigate = useNavigate()

  const onClickNavigate = () => {
    navigate('/login')
  }
  return (
    <OnBoardContainer>
      <Headers />
      <OnBoardContentContainer>
        <AppLogoButton type='button' onClick={onClickNavigate}>
          <AppLogo
            src='https://res.cloudinary.com/dj2tk6c0s/image/upload/v1716210407/Vector_1_zxavuw.png'
            alt='logo'
          />
        </AppLogoButton>
      </OnBoardContentContainer>
    </OnBoardContainer>
  )
}

export default Onboard
