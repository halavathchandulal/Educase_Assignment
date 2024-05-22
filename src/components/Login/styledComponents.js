import styled from 'styled-components'

export const LoginContainer = styled.div`
heigt: 100vh;
width: 427px;
padding: 20px;
display:flex;
flex-direction:column;
`

export const HeaderContainer = styled.div`
height: 15vh;
padding: 10px;
display:flex;
justify-content:space-between;

`
export const IconImage = styled.img`
height:13px;
`
export const MainHeading = styled.h1`
font-size: 38px;
font-family: "Poppins";
color:#4E4B66;
font-weight: bold;
margin: 0px;
`

export const GreetingMessage = styled.p`
font-size: 20px;
font-family: "Poppins";
color: #4E4B66;
margin: 0px;
`

export const FormContainer = styled.form`
display:flex;
flex-direction: column;
margin-top: 40px;
width: 85%`

export const Label = styled.label`
font-family: "Poppins";
font-size: 14px;
color:#4E4B66;
font-weight: 400;
`

export const Input = styled.input`
width: Fill (379px)px;
height: Fixed (48px)px;
padding: 10px 0px 10px 0px;
gap: 10px;
border-radius: 6px ;
border: 1px 0px 0px 0px;
opacity: 0px;
border: 1px solid ;
border-color: ${props => (props.isTrue ? '#C30052' : '#EEF1F4')};
background: #FFFFFF;
outline: none;
margin-bottom: 20px;

`

export const PasswordConatiner = styled.div`width: Fixed (379px)px;
height: Hug (73px)px;
gap: 4px;
opacity: 0px;
`

export const PasswordInputContainer = styled.div`
width: Fill (379px)px;
height: Fixed (48px)px;
padding: 5px;
gap: 10px;
border-radius: 6px;
border: 1px 0px 1px 0px;
opacity: 0px;
background: #FFFFFF;
border: 1px solid ;
border-color: ${props => (props.isTrue ? '#C30052' : '#EEF1F4')};
`
export const PasswordInput = styled.input`
width: 300px;
height: 21px;
gap: 0px;
opacity: 0px;
font-family: "Poppins";
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0.11999999731779099px;
text-align: left;
border: none;
outline:none;
`

export const CheckBoxContainer = styled.div`
display:flex;
margin-top: 15px;
justify-content:space-between;
align-item:center;

`
export const CheckBox = styled.input`
height: 18px;
margin:0px;
margin-right: 5px;
`

export const LoginButton = styled.button`
width: Fixed (379px)px;
height: Hug (50px)px;
padding: 13px 24px 13px 24px;
gap: 10px;
border-radius: 6px ;
opacity: 0px;
background: #1877F2;
color: #ffffff;
border:none;
outline:none;
cursor:pointer;
font-family:"Poppins";
font-weight:600;
margin-top:25px;
`
export const Paragraph = styled.p`
font-family: "Poppins";
font-size:15px;
color:#4E4B66;
text-align:center;
`
export const ButtonsContainer = styled.div`
display:flex;
justify-content:space-between;
width: 80%

`

export const SocialButton = styled.button`
backgroun-color:background: #EEF1F4;
padding: 15px 20px 15px 20px;
border-radius: 5px;
outline:none;
color:#4E4B66;
border:none;

`

export const SocialImg = styled.img`
height: 15px;
margin-right:5px;
align-self:center;
`

export const ErrorMessage = styled.p`
font-family: "Poppins";
font-size: 15px;
color: #C30052;
margin-top:0px;

`

export const HeadingBlue = styled.h1`
font-size: 35px;
font-family: "Poppins";
color:#1877F2;
font-weight: bold;
margin: 0px;
`

export const ForgetPassword = styled.p`
font-family: "Poppins";
font-size:15px;
color:#1877F2;
text-align:right;
`
export const ShowButton = styled.button`
border:none;
cursor:pointer;
outline:none;
background-color:transprant;
color:transprant;
padding:0px;

`
