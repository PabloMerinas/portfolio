import React from "react";
import styled from 'styled-components';
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";

const MainContainer = styled.div`
background: ${props => props.theme.body};
widht: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
    font-family:'Karla', sans-serif;
    font-weight: 500;
}
`
const Container = styled.div`
padding: 2rem;
`
const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`
const WORK = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
left: 2rem;
transform: rotate(-90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`
const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`


const Main = () => {
    return (
        <MainContainer>
            <Container>
                <PowerButton />
                <LogoComponent />
                <SocialIcons />

                <Contact target='_blank' to={{ pathname: 'mailto:pablomersot@gmail.com' }}>
                    <h3>
                        Say hi...
                    </h3>
                </Contact>
                <BLOG to='/blog'>
                    <h3>
                        Blog
                    </h3>
                </BLOG>
                <WORK to='/work'>
                    <h3>
                        My works
                    </h3>
                </WORK>
                <BottomBar>
                    <ABOUT to='/about'>
                        <h3>
                            About.
                        </h3>
                    </ABOUT>
                    <SKILLS to='/skills'>
                        <h3>
                            My Skills.
                        </h3>
                    </SKILLS>
                </BottomBar>

            </Container>
        </MainContainer>
    )
}

export default Main;