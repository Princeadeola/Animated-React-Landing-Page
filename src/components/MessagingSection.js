import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';
import avater1 from '../img/avatar1.svg';
import avater2 from '../img/avatar2.svg';
import avater3 from '../img/avatar3.svg';
import avater4 from '../img/avatar4.svg';
import avater5 from '../img/avatar5.svg';
import messaging from '../img/conversation.svg';
import bgCircles from '../img/bg_circles.svg';

function MessagingSection() {
    return (
        <MessageStyle>
            <InnerLayout>
                <div className="message-con">
                    <div className="left-items">
                        <h2 className="secondary-heading">
                            We support you in 5 different Language
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia nemo distinctio dolores necessitatibus odit magni 
                            corrupti error Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia nemo distinctio dolores necessitatibus odit magni 
                        </p>
                        <div className="images-con">
                            <img src={avater1} alt="" className="image-1"/>
                            <img src={avater2} alt="" className="image-2"/>
                            <img src={avater3} alt="" className="image-3"/>
                            <img src={avater4} alt="" className="image-4"/>
                            <img src={avater5} alt="" className="image-5"/>
                            <p>&nbsp; +25</p>
                        </div>
                        <img src={bgCircles} alt="" className="bgCircle"/>
                    </div>
                    <div className="right-items">
                    <img src={messaging} alt="" className=""/>
                    <img src={bgCircles} alt="" className="bgCircle"/>
                    </div>
                </div>
            </InnerLayout>
        </MessageStyle>
    )
}

const MessageStyle = styled.section`
    .message-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        

        .left-items{
            padding-right: 2rem;
            position: relative;
            p{
                padding: 2rem 0;
            }

            .images-con{
                display: flex;
                align-items: center;
                .image-2, .image-3, .image-4, .image-5{
                    margin-left: -20px;
                }
            }
            .bgCircle{
                position: absolute;
                top: -7%;
                left: -10%;
                z-index: -1;
            }
        }

        .right-items{
            position: relative;
            img{
                padding-left: 2rem;
            }
            .bgCircle{
                position: absolute;
                bottom: -5%;
                right: -4%;
                z-index: -1;
            }
        }
    }
    // Tablets
    .message-con{
        @media (min-device-width: 890px) 
            and (max-device-width: 1200px) {
            .images-con{
                display: flex;
                align-items: center;
                .image-2, .image-3, .image-4, .image-5{
                    margin-left: -10px;
                }
                p{
                    padding: 1rem;
                }
            }
            
            .right-items{
                img{
                    padding-left: 1rem;
                }
            }
        }
    }

    // Phones 1
    @media only screen and (min-device-width: 480px) 
        and (max-device-width: 890px){
        .message-con{
            display: grid;
            margin-top: 20px;
            grid-template-columns: repeat(1, 1fr);

            .left-items{
                width: 115%;

                p{
                    padding: 2rem 0;
                }
    
                .images-con{
                    display: flex;
                    align-items: center;
                    .image-2, .image-3, .image-4, .image-5{
                        margin-left: -20px;
                    }
                }
            }

            .right-items{
                position: relative;
                img{
                    padding-top: 3rem;
                    width: 100%;
                }
            }
        }
            
    }
    // Phones 2
    @media only screen and (max-device-width: 480px){
        padding: 2rem 2rem;
        .message-con{
            display: grid;
            margin-top: 20px;
            grid-template-columns: repeat(1, 1fr);

            .left-items{
                width: 115%;

                p{
                    padding: 2rem 0;
                }
    
                .images-con{
                    display: flex;
                    align-items: center;
                    .image-2, .image-3, .image-4, .image-5{
                        margin-left: -20px;
                    }
                }
            }

            .right-items{
                position: relative;
                img{
                    padding-top: 3rem;
                    width: 100%;
                }
            }
        }
    }
`;

export default MessagingSection
