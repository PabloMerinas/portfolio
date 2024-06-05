import React from 'react'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'
import { useNavigate } from 'react-router-dom'


const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    background-color: white;
    box-shadow: 0 0 8px 6px ${props => props.bgColor};
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const PowerButton = ({bgColor}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const rootElement = document.getElementById('main-container');
        rootElement.style.transition = 'opacity 0.5s ease';
        rootElement.style.opacity = 0;
        setTimeout(() => {
            navigate('/');
        }, 505);
    };

    return (
        <Power bgColor={bgColor} onClick={handleClick}>
            <PowerBtn width={30} height={30} fill='currentColor' />
        </Power>
    )
}

export default PowerButton
