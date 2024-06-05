import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>

                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton bgColor={'black'}/>
                <Main>
                    <Title>
                        <Design width={40} height={40} /> Backend
                    </Title>
                    <Description>
                        ¡Me apasiona crear aplicaciones y servicios robustos y eficientes!
                    </Description>
                    <Description>
                        <strong>Me gusta diseñar:</strong>
                        <ul>
                            <li>
                                APIs
                            </li>
                            <li>
                                Microservicios
                            </li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Herramientas:</strong>
                        <ul>
                            <li>
                                Java: Utilizo Java para desarrollar aplicaciones backend de alto rendimiento.
                            </li>
                        </ul>
                    </Description>
                </Main>

                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Frontend
                    </Title>
                    <Description>
                        Me encanta crear diseños webs limpios, simples y minimalistas.
                    </Description>
                    <Description>
                        <strong>Habilidades</strong>
                        <p>
                            HTML, CSS, JavaScript, React, Sass, Bootstrap, Tailwind, etc.
                        </p>
                    </Description>
                    <Description>
                        <strong>Herramientas</strong>
                        <p>
                            VSCode, GitHub, etc.
                        </p>
                    </Description>
                </Main>


                <BigTitle text="HABILIDADES" top="80%" right="30%" />

            </Box>

        </ThemeProvider>

    )
}

export default MySkillsPage
