import React from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import StyledForm from '../styled-components/styled-form'

class Register extends React.Component{
    constructor(props)
    {
        super(props);
        
        this.state = {
            isLoading: false,
            credentials: {
                username: '',
                password: '',
            }
         }
        this.handleChange = this.handleChange.bind(this);
        this.handleArrayChange = this.handleArrayChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = e => {
        this.setState({credentials: {
         ...this.state.credentials,
         [e.target.name]: e.target.value
     }});
     console.log(this.state.credentials);
 }

    handleArrayChange = e =>
    {
    }
    handleSubmit = e => {
    	e.preventDefault();
        this.setState({...this.state, isLoading: true});

        axiosWithAuth().post('https://marijuana-api.herokuapp.com/api/auth/register', this.state.credentials)
        .then(res => {
            window.localStorage.setItem('token', res.data.payload);
            this.setState({...this.state, isLoading: false});
            this.props.history.push('/protected');
        })
        .catch(err => {
            console.log(err);
            alert("Unable to register");
            this.setState({...this.state, isLoading: false});
        })

    }   
    render()
    {
        return (
            <StyledForm>
                <h1>User Registration</h1>
                <p>Please fill in all required fields</p>
                {this.state.success === false &&
                <p className = "alert alert-error" role = "alert">
                {this.state.message}
                </p>}
                {this.state.success === true && 
                <p className = "alert alert-success" role = "alert">
                    Registration Successful</p>}
                    {!this.state.success &&
                <form onSubmit={this.handleSubmit}>
                <input name="username" placeholder="Username" onChange={this.handleChange}/>
                <input type = "password"name="password" placeholder="Password" onChange={this.handleChange}/>
                <button>Register</button>
                            </form>}
            </StyledForm>
        );
    }
}
export default Register;