import React from 'react'
import StyledForm from '../styled-components/styled-form'

function Login(props){
    return(
        <StyledForm>
            <div>
                <h2>Login</h2>
                <label>
                    Username
                    <input
                      type='text'
                      name='username'
                    />
                </label>

                <label>
                    Password
                    <input
                    type='text'
                    name='password'
                    />
                </label>

                <button>Login</button>
            </div>
        </StyledForm>
    )
}

export default Login
