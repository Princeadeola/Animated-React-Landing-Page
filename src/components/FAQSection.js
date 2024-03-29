import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';
import lines from '../img/lines.svg'
import questions from '../questions';
import Question from './Question';

function FAQSection() {
    return (
        <FaqStyled>
            <InnerLayout>
                <h3 className="small-heading">Frequently <span>asked questions</span></h3>
                <p className="c-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia nemo distinctio dolores necessitatibus odit magni corrupti error Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia nemo </p>

                <div className="lines">
                    <img src={lines} alt="" />
                </div>

                <div className="question-con">
                    {
                        questions.map((q)=>{
                            return <Question key={q.id} {...q} />
                        })
                    }
                </div>

            </InnerLayout>
        </FaqStyled>
    )
}

const FaqStyled = styled.section`
    .c-para{
        width: 60%;
        margin: 0 auto;
    }
    .lines{
        position: absolute;
        left: 0;
        top: 350%;
        width: 100%;
        z-index: -1;

        img{
            width: 100%;
        }
    }
    .question-con{
        padding-top: 4rem;
    }

`;


export default FAQSection
