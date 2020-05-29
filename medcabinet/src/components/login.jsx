import React from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import StyledForm from '../styled-components/styled-form'

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = e => {
   		this.setState({credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }});
        console.log(this.state.credentials);
    }

    handleSubmit = e => {
    	e.preventDefault();
        this.setState({...this.state, isLoading: true});

        axiosWithAuth().post('https://marijuana-api.herokuapp.com/api/auth/login', this.state.credentials)
        .then(res => {
            // Give api the token
            window.localStorage.setItem('token', res.data.token);
            this.setState({...this.state, isLoading: false});
            // Send logged in user to protected page
            this.props.history.push('/protected');
        })
        .catch(err => {
            console.log(err);
            alert("Unable to sign in");
            this.setState({...this.state, isLoading: false});
        })

    }   

    render() {
        return (
            <StyledForm className="LoginPage">
                <h2>Login Page</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" placeholder="Username" onChange={this.handleChange}/>
                    <input type = "password"name="password" placeholder="Password" onChange={this.handleChange}/>
                    <button>Login</button>
                </form>
                {this.state.isLoading && <div><h3>Logging in</h3></div>}
            </StyledForm>
        )
    }
}

export default Login 
