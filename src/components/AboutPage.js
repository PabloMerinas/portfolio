import React, { useState, useEffect } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

`
const FadeIn = styled.div`
opacity: ${props => (props.show ? 1 : 0)};
transition: opacity 1s ease;
`



const AboutPage = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(false);
        setTimeout(() => {
            setShow(true);
        }, 1);
    }, []);

    return (
        <ThemeProvider theme={DarkTheme}>
            <div id='main-container'>
                <Box>
                    <FadeIn show={show}>
                        <LogoComponent theme='dark' />
                        <SocialIcons theme='dark' />
                        <PowerButton bgColor={'white'} />

                        <Spaceman>
                            <img src={astronaut} alt="spaceman" />
                        </Spaceman>
                        <Main>
                            Soy un desarrollador fullstack ubicado en España. Me encanta crear sitios web simples pero hermosos con una excelente experiencia de usuario.
                            <br /> <br />
                            Estoy interesado en toda la parte de frontend y backend. Me gusta probar cosas nuevas y hacer grandes proyectos. Soy un freelancer independiente. Estoy aprendiendo continuamente, ya que me motiva aprender de todo.<br /> <br />
                            Creo que todo es un arte cuando pones tu conciencia en ello. Puedes contactarme a través de mis enlaces sociales.
                        </Main>
                        <BigTitle text="Sobre mi" top="10%" left="5%" />
                    </FadeIn>
                </Box>
            </div>

        </ThemeProvider>

    )
}

export default AboutPage
