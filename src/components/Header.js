import React from 'react'
import styled from 'styled-components'
import bg from '../img/bg.svg'
import HeaderContent from './HeaderContent';
import Navigation from './Navigation';

function Header() {
    return (
        <HeaderStyled>
            <div className="header-content">
                <Navigation />
                <HeaderContent />
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    min-height: 100vh;
    width: 100%;
    background-image: url(${bg});   
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;

    .header-content{
        padding: 0 15rem;
    }
    // Tablets
    @media 
        (min-device-width: 890px) 
        and (max-device-width: 1200px) {
            .header-content{
                padding: 0 10rem;
            }
    }
    // Phones 1
    @media only screen and (min-device-width: 480px) 
        and (max-device-width: 890px){
            .header-content{
                padding: 0 2rem;
            }
    }
    // Phones 2
    @media only screen and (max-device-width: 480px){
        .header-content{
            padding: 0 2rem;
        }
    }
`;

export default Header


