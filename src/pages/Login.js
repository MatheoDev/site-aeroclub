import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../service/api'
import { Alert, AlertTitle } from '@material-ui/lab'

const Wrapper = styled.section`
    width: 80%;
    overflow: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    form {
        width: 40%;
        display: flex;
        flex-direction: column;
        
        input {
            font-size: 14px;
            &[type=email], &[type=password] {
                margin: 20px 0;
                padding: 10px 15px;
                background: linear-gradient(to right bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.3));
                border: none;
                border-radius: 30px;
                border: solid 2px transparent;
                transition: all 0.5s ease;

                &:focus-visible {
                    outline: none;
                    border: solid 2px rgba(102, 255, 102, 0.5);
                }
            }
            &[type=password]{
                letter-spacing: 6px;
            }
            &[type=submit] {
                padding: 10px;
                width: 50%;
                border: solid 2px transparent;
                background: linear-gradient(to right top, #222831, #343d4b);
                color: white;
                text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
                border-radius: 30px;
                transition: all 0.5s ease;

                &:hover {
                    border: solid #66ff66 2px;
                }
            }
        }
    }

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

const MyAlert = styled(Alert)`
    position: absolute;
    width: 60%;
    top: 100px;
    margin: 0 auto;
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
                if (response.status === 200) {
                    this.props.isAuth(true)
                    localStorage.setItem('idUser', response.data.data.id)
                    this.props.history.push("/mon-compte");
                }
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
                    <MyAlert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        Mot de passe ou identifiant incorrect — <strong>Veuillez reassayer</strong>
                    </MyAlert>
                }
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email :</label>
                    <input name="email" type="email" id="email" placeholder="Ex : john.doe@mail.fr" value={this.state.email} onChange={this.handleChange} />
                    <label htmlFor="password">Mot de passe :</label>
                    <input name="password" type="password" id="password" value={this.state.password} onChange={this.handleChange} />
                    <input name="submit" type="submit" id="submit" value="Se connecter"/>
                </form>
            </Wrapper>
        )
    }
}

export default Login