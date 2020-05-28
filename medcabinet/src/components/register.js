import React from 'react'
import styled from 'styled-components'
import StyledForm from '../styled-components/styled-form'





function Registration (props) {
    const {values, onInputChange, errors, disabled} = props

    const onRegister = evt => {
        evt.preventDefault();
        const newUser = {
            username: values.username,
            email: values.email,
            password: values.password
        }

        
    }
    return(
        <StyledForm>
            <div>
                <h2>Register</h2>
                <label>
                    Email<br/>
                    <div className='errors'>{errors.email}</div>
                    <input
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>

                <label>
                    Username<br/>
                    <div className='errors'>{errors.username}</div>
                    <input
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={onInputChange}
                    />
                </label>

                <label>
                    Password<br/>
                    <div className='errors'>{errors.password}</div>
                    <input
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onInputChange}
                    />
                </label>

                <button disabled={disabled}>Register</button>
            </div>
        </StyledForm>
    )
}

export default Registration