import React from 'react'
import styled from 'styled-components'

const RegisterForm = styled.form`
    padding: 2% 0;

    div{
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50%;
        width: 40%;
        margin: 4% 30%;
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
            margin: 3%;
            padding: 1%;
            font-size: 1.5rem;

            &:disabled{
                background: #cd5c5c;
                border-color: #cd5c5c;
                cursor: not-allowed;
            }
        }
    }
`

function Registration (props) {
    const {values, onInputChange, errors, disabled} = props
    return(
        <RegisterForm>
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
        </RegisterForm>
    )
}

export default Registration