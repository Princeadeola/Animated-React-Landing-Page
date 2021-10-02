import React, { useState } from 'react'
import styled from 'styled-components'
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg'
import Hambuger from './Hambuger';

function Navigation() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">pricing</a></li>
            </ul>
            <div className="hamburger" onClick={toggleHamburger}>
                <Hambuger />
            </div>

            <PrimaryButton name={'Sign Up'}/>
        </NavigationStyled>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 10vh;

    .hamburger{
        display: none;
    }

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;


    }
    // Phones 1
    @media only screen and (max-device-width: 480px) {
            ul{
                display: none;
                justify-content: space-between;
                padding-right: 30px;
                width: 30%;
            }

            .hamburger{
                display: fixed;
                padding-top: 10px;
                margin-left: 10px;
                z-index: 10px;
            }
        }
    }
`;
export default Navigation
