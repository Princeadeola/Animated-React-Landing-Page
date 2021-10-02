import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';
import Card from './Card';
import card from '../img/creditcard.svg'
import active from '../img/active.svg'
import inactive from '../img/inactive.svg'
import check from '../img/check.svg'
import checkDisabled from '../img/check-disabled.svg'

function PaymentSection() {
    return (
        <PaymentStyled>
            <InnerLayout>
                <h3 className="small-heading">An exceptional services, <span>at the right price</span></h3>
                <p className="c-para">Start with our free plan and switch to premium as you grow. </p>

                <div className="card-con">
                    
                    <Card 
                    account ={'Free'}
                    amount = {'$0'}
                    text = {'Manage your business wih a simple and efficient account'}
                    button = {'Get Started'}
                    card = {card}
                    active = {active}
                    inactive = {inactive}
                    check = {check}
                    checkDis = {checkDisabled}
                    text1 = {'10 free local transfer'}
                    text2 = {'Free ATM withdrawals in Dllars up to $250 per month'}
                    text3 = {'Free payment to other draft accounts'}
                    text4 = {'Prepaid debit cards'}
                    text5 = {'Virtual cards'}
                    text6 = {'Priority 24/7 support'}
                    text7 = {'Exchange 24 currencies'}
                    text8 = {'Multi-user access'}
                    />

                    <Card 
                    account ={'Premium'}
                    amount = {'$150'}
                    text = {'Manage your business wih a simple and efficient account'}
                    button = {'Get Started'}
                    card = {card}
                    active = {active}
                    inactive = {inactive}
                    check = {check}
                    checkDis = {checkDisabled}
                    text1 = {'10 free local transfer'}
                    text2 = {'Free ATM withdrawals in Dllars up to $250 per month'}
                    text3 = {'Free payment to other draft accounts'}
                    text4 = {'Prepaid debit cards'}
                    text5 = {'Virtual cards'}
                    text6 = {'Priority 24/7 support'}
                    text7 = {'Exchange 24 currencies'}
                    text8 = {'Multi-user access'}
                    />
                </div>
            </InnerLayout>
        </PaymentStyled>
    )
}

const PaymentStyled = styled.section`
    .card-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 7.5rem;

    }
    // Phones 1
    @media only screen and (min-device-width: 480px) 
        and (max-device-width: 890px){
        .card-con{
            grid-template-columns: repeat(1, 1fr);  
        }
    }
    // Phones 2
    @media only screen and (max-device-width: 480px){
        .card-con{
            grid-template-columns: repeat(1, 1fr);  
        }
    }

`;

export default PaymentSection
