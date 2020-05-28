import React, {NavLink} from 'react'
import styled from 'styled-components'

const SavedStrains = styled.div`
    width: 90%;
    margin: 1% 5%;
    
    border:1px solid #34CC5C;
    border-radius: 10px;
    box-shadow: 0px 1px 2px 0px #29E05B;
    background: white;

    h3{
        background: #34CC5C;
        border: 1px solid #34CC5C;
        border-radius: 10px 10px 0 0;
        color: white;
        font-size: 2.5rem;
        width: 100%;
        text-align: center;
        margin-top: 0;
        
    }
    .cards{
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        justify-content: space-around;

        a{
            text-decoration: none;
            width: 20%;
            margin: 4%;

            div{
                width: 100%;
                margin: 4% 0;
                .save{
                    display: none;
                }
            }
        }   
    }
    
`
export default SavedStrains