import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ChartStats from './ChartStats';
import chart from '../img/chart.svg';
import AnimatedButton from './AnimatedButton';

function ChartSection() {
    return (
        <ChartStyled >
            <InnerLayout>
                <div className="chart-con">
                    <div className="chart-left">
                        <div className="stats">
                            <div className="stats-money">
                                <ChartStats name={'Balance'} amount={'$250'} />
                                <ChartStats name={'Last Transaction'} amount={'$1,000'} />
                            </div>
                            <img src={chart} alt="" />
                        </div>
                    </div>
                    <div className="chart-right">
                        <h2 className="secondary-heading">
                            Manage your finances like a pro in no time 
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia nemo distinctio dolores necessitatibus odit magni corrupti error, 
                            voluptate alias adipisci ducimus nostrum maiores. Ad?
                        </p>
                        <AnimatedButton name={'Learn More'}/>
                    </div>
                </div>
            </InnerLayout>
        </ChartStyled >
    )
}

const ChartStyled = styled.section`
    .chart-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .chart-left{
            width: 80%;

            
            .stats{
                img{
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 62px;
                    width: 100%;
                }
                .stats-money{
                    display: flex;
                    padding-bottom: 1.3rem;
                    justify-content: space-between;
                }
            }
        }
        .chart-right{
            padding-left: 2rem;

            p{
                padding: 1.3rem 0;
            }
        }
        
    }
    // Tablets
    .chart-con{
        @media (min-device-width: 890px) 
            and (max-device-width: 1200px) {
            .chart-left{
                width: 100%;
                .stats{
                    width: 80%;
                }

            }   

            .chart-right{
                padding-left: .2rem;
    
                p{
                    padding: 1rem 0;
                }
            }
        }
    }
    // Phones 1
    @media only screen and (min-device-width: 480px) 
        and (max-device-width: 890px){
        .chart-con{
            display: grid;
            grid-template-columns: repeat(1, 1fr);

            .chart-left{
                width: 70%;
            }

            .chart-right{
                padding-top: 2rem;

                h2{
                    width: 80%;
                }
    
                p{
                    padding: 1.3rem 0;
                    width: 75%;
                }
            }
        }
            
    }

    // Phones 2
    @media only screen and (max-device-width: 480px){
        .chart-con{
            display: grid;
            grid-template-columns: repeat(1, 1fr);

            .chart-left{
                width: 70%;
            }

            .chart-right{
                padding-top: 2rem;

                h2{
                    width: 80%;
                }
    
                p{
                    padding: 1.3rem 0;
                    width: 75%;
                }
            }
        }
    }
`;

export default ChartSection
