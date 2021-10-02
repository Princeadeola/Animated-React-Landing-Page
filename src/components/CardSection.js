import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';
import card from '../img/creditcard.svg'

function CardSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h1 className="secondary-heading">
                            One card for all payments
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit 
                            molestiae minus dicta ipsum atque est qui vel illo magni voluptates esse, e x
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit 
                            molestiae minus dicta ipsum atque est qui vel illo magni voluptates esse, e x
                        </p>
                    </div>
                    
                    <div className="card-right">
                        <img src={card} alt=""/>
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled  = styled.section`
    .card-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        

        .card-right{
            display: flex;
            justify-content: flex-end;
        }
        .card-left{
            p{
                padding: 1rem 0;
            }
        }
    }
    // Phones 1
    @media only screen and (min-device-width: 480px) 
        and (max-device-width: 890px){
        .card-container{
            display: grid;
            grid-template-columns: repeat(1, 1fr);

            .card-right{
                img{
                    width: 100%;
                }
            }
            .card-left{
                p{
                    padding: 2rem 0;
                }
            }
        }
    }

    // Phones 2
    @media only screen and (max-device-width: 480px){
        .card-container{
            display: grid;
            grid-template-columns: repeat(1, 1fr);

            .card-right{
                img{
                    width: 100%;
                }
            }
            .card-left{
                p{
                    padding: 2rem 0;
                }
            }
        }
    }
`;

export default CardSection
