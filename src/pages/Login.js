import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../service/api'

const Wrapper = styled.section`
    width: 80%;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(to right bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.5)); 
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.4)); 
    }
`

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            errors: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const {email, password} = this.state
        let config = {"username": email, "password": password}
        api.postLogin(config)
            .then(response => {
                this.setState({errors: false})
                console.log(response)
            })
            .catch(error => {
                this.setState({errors: true})
            })
        event.preventDefault()
    }

    render () {
        return (
            <Wrapper>
                { this.state.errors && 
                    <div>ERREUR</div>
                }
                <form onSubmit={this.handleSubmit}>
                    <label>Email :</label>
                    <input name="email" type="email" id="email" value={this.state.email} onChange={this.handleChange} />
                    <label>Mot de passe :</label>
                    <input name="password" type="password" id="password" value={this.state.password} onChange={this.handleChange} />
                    <input name="submit" type="submit" id="submit" />
                </form>
            </Wrapper>
        )
    }
}

export default Login