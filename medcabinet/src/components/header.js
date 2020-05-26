import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
    border-bottom: 2px solid #29E05B;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background: white;

    img{
        width: 25%;
        height: auto;
        margin: 2%;
    }

    .headerLinks{
        margin: 2%;
        width: 25%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a{
        text-decoration: none;
        color: #34CC5C;
        font-size: 2.5rem;
    }
    }
   
`

function Header(props) {
    return (
        <StyledHeader>
            <img src={require('../logo.png')}/>
            <div className='headerLinks'>
                <Link to='/login'>login</Link>
                <Link to='/register'>register</Link>
            </div>
        </StyledHeader>
    )
}

export default Header