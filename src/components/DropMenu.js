import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const DropContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #30475e;
    display: grid;
    align-items: center;
    transition: 0.5s ease-in-out;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%') };
    left: 0;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0') };
    color: white;
`

const Icon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 30px;
`

const CloseDrop = styled(FaTimes)`
    color: white;
    font-size: 1.8em;
`

const DropWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
`

const DropMenuLink = styled(NavLink)`
    color: #e8e8e8;
    padding: 20px;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    font-size: 1.5em;
    font-weight: 600;

    &.is-active, &:hover {
        text-decoration: underline;
        text-underline-offset: 4px;
        color: #f05454;
    }
`

const NavMenuBtn = styled(NavLink)`
    color: #e8e8e8;
    height: 100%;
    width: 50%;
    justify-self: center;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    font-size: 1.5em;
    font-weight: 600;
    background-color: #f05454;
    border-radius: 15px;
    padding: 7px 20px;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.7);

    &:hover {
        text-decoration: none;
        color: white;
        transform: translateY(-2px);
    }
`

function DropMenu({isOpen, toggle}) {

    return(
        <>
            <DropContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseDrop />
                </Icon>
                <DropWrapper>
                    <DropMenuLink exact activeClassName='is-active' to='/'>Accueil</DropMenuLink>
                    <DropMenuLink exact activeClassName='is-active' to='forfait'>Forfaits</DropMenuLink>
                    <DropMenuLink exact activeClassName='is-active' to='avions'>Avions</DropMenuLink>
                    <DropMenuLink exact activeClassName='is-active' to='avions'>Contact</DropMenuLink>
                    <NavMenuBtn exact activeClassName='is-active' to='/login'>Connexion</NavMenuBtn>
                </DropWrapper>
            </DropContainer>
        </>
    )
}

export default DropMenu