import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
    padding: 2% 0;

    div{
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50%;
        width: 40%;
        margin: 4% 30%;
        padding: 2% 0;
        border:1px solid #34CC5C;
        border-radius: 10px;
        color: #34CC5C;
        box-shadow: 0px 1px 2px 0px #29E05B;

        h2{
            font-size: 2.5rem;
        }

        label{
            font-size: 2rem;
            margin: 2%;
            width: 90%;
            text-align: center;

            .errors{
                color: #cd5c5c;
                border: none;
                box-shadow: none;
                font-size: 1.4rem;
                margin: 0;
                width: 100%;
            }

            input{
                width: 50%;
                margin: 2% 25%;
                height: 40%;
                border: 2px solid #34CC5C;
                border-radius: 2px;
            }

        
        }
        button{
            background: #34CC5C;
            color: white;
            border: 1px solid #34CC5C;
            border-radius: 5px;
            margin: 4%;
            padding: 1%;
            font-size: 1.5rem;

            &:disabled{
                opacity: 40%;
                cursor: not-allowed;
            }
        }
    }
`

export default StyledForm