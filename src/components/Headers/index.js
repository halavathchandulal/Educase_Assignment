import {IoIosBatteryFull} from 'react-icons/io'
import {IoIosWifi} from 'react-icons/io'
import {GiNetworkBars} from 'react-icons/gi'
import {HeaderContainer, IconImage, NetworkContainer} from './styledComponents'

const Headers = () => (
  <HeaderContainer>
    <IconImage
      src='https://res.cloudinary.com/dj2tk6c0s/image/upload/v1716142522/Time_obbac1.png'
      alt='time'
    />
    <NetworkContainer>
      <GiNetworkBars size={20} />
      <IoIosWifi size={20} />
      <IoIosBatteryFull size={20} />
    </NetworkContainer>
  </HeaderContainer>
)

export default Headers
