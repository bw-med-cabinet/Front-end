import React from 'react'
import {Link} from 'react-router-dom'
import StyledHeader from '../styled-components/styledHeader.js'

function Header(props) {
    return (
        <StyledHeader>
            <Link to='/'><img className='logo' src={require('../images/logo.png')}/></Link>
            <div className='headerLinks'>
                <Link to='/strains'>strains</Link>
                <Link to='/register'>register</Link>
                <Link to='/login'>login</Link>
            </div>
        </StyledHeader>
    )
}

export default Header