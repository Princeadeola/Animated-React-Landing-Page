import React, { useState } from 'react'
import styled from 'styled-components'
import plus from '../img/plus.svg'
import minus from '../img/minus.svg'

function Question({title, description}) {
    const [toggle, setToggle] = useState(false);

    const btnToggler = () => {
        setToggle(!toggle);
    }
    return (
        <QuestionStyled>
            <div className="q-con">
                <div className="toggle-title">
                    <h4>{title}</h4>
                    <button onClick={btnToggler} >
                        {!toggle && <img src={plus} alt="" />}
                        {toggle && <img src={minus} alt="" />}
                    </button>
                </div>
                {toggle && <p>{description}</p>}
            </div>
        </QuestionStyled>
    )
}

const QuestionStyled = styled.div`

    background: #fff;
    margin: 1rem 0;
    padding: 1.4rem 1rem;
    border-radius: 30px;
    transition: all .4s ease-in-out;
    box-shadow: 0 25px 50px rgba(22, 25, 79, 0.05);

    h4{
        color: #16194F;
        font-size: 1.3rem;
    }
    .toggle-title{
        display: flex;
        align-items: center;
        justify-content: space-between;  

        button{
            background: transparent;
            outline: none;  
            border: none;
            cursor: pointer;
        }
    }

    
`;

export default Question
