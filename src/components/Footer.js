import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';
import logo from '../img/logo.svg';

function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
                <div className="footer-con">
                    <div className="logo-con">
                        <div className="logo-items">
                            <img src={logo} alt="" />
                            <p>Copyright @2021 Smart Contract. <br/>
                                All rights reserved.
                            </p>
                        </div>
                    </div>
                    <ul className="bottom-nav">
                        <div className="links1">
                            <li><a href="#team">Team</a></li>
                            <li><a href="#team">Press</a></li>
                            <li><a href="#team">Fee</a></li>
                        </div>
                        <div className="links2">
                            <li><a href="#team">Service</a></li>
                            <li><a href="#team">Projects</a></li>
                            <li><a href="#team">Affiliate</a></li>
                        </div>
                        <div className="links3">
                            <li><a href="#team">Terms of use</a></li>
                            <li><a href="#team">Privacy Policy</a></li>
                            <li><a href="#team">Contact Us</a></li>
                        </div>
                    </ul>
                </div>
            </InnerLayout>
            
        </FooterStyled>
    )
}

const FooterStyled = styled.section`
    padding: 0 18rem;
    background: #DCE2F0;
    // Tablets
    @media 
        (min-device-width: 890px) 
        and (max-device-width: 1200px) {
            padding: 0rem 10rem;
    }

    .footer-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
       
    }
    .logo-con{
        display: flex;
        align-items: center;

        img{
            width: 90px;
        }
    }
    .bottom-nav{
        display: flex;
        justify-content: space-between;

        li{
            padding: 2rem 0;
            color: #16194F; 
        }
    }
    // Phones 1
    @media only screen and (min-device-width: 480px) 
        and (max-device-width: 890px){
            padding: 0 5rem;
        .footer-con{
            grid-template-columns: repeat(1, 1fr);

            .logo-con{
                display: flex;
                align-items: center;
        
                img{
                    width: 50px;
                }
            }
            .bottom-nav{
                display: flex;
                justify-content: space-between;
        
                li{
                    padding: 2rem 1rem;
                    color: #16194F; 
                }
            }
        }
    }

    // Phones 2
    @media only screen and (max-device-width: 480px){
            padding: 0 5rem;
        .footer-con{
            grid-template-columns: repeat(1, 1fr);

            .logo-con{
                display: flex;
                align-items: center;
        
                img{
                    width: 50px;
                }
            }
            .bottom-nav{
                display: flex;
                justify-content: space-between;
        
                li{
                    padding: 2rem 1rem;
                    color: #16194F; 
                }
            }
        }
    }
`;

export default Footer
