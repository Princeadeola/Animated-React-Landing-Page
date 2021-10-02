import React from 'react'
import styled from 'styled-components'

function Hambuger() {
    return (
        <HambugerStyled>
            <div className="hamburger">
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>
            
        </HambugerStyled>
    )
}

const HambugerStyled = styled.div`
    .hamburger{
        wdith: 2rem;
        height: 2rem;
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        z-index: 10;
    }
    .burger{
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;
        background-color: black;
        transform-origin: 1px;
        transition: all .3s linear;
    }
    // Phones 1
    @media only screen and (min-device-width: 480px) 
        and (max-device-width: 890px){
            .hamburger{
                display: flex;
                z-index: 10;
            }
            .burger{
                width: 2rem;
                height: 0.25rem;
                border-radius: 10px;
                background-color: black;
                transform-origin: 1px;
                transition: all .3s linear;
            }
        }
    }
`;

export default Hambuger
