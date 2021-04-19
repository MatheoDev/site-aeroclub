import React from 'react'
import styled, { css } from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { GiBiplane } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #222831;
    padding: 20px 40px;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.5);
`

const NavLinkS = css`
    color: #e8e8e8;
    padding: 0 10px;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    font-size: 1.1em;
    font-weight: 600;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);

    &.is-active, &:hover {
        text-decoration: underline;
        text-underline-offset: 4px;
        color: #f05454;
    }
`

const Logo = styled.div`
    ${NavLinkS}
    font-size: 1.4em;

    &:hover {
        text-decoration: none;
    }
`

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        font-size: 1.3em;
        color: #e8e8e8;
    }
`

const NavMenu = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavMenuLink = styled(NavLink)`
    ${NavLinkS}
`

const NavMenuBtn = styled(NavLink)`
    ${NavLinkS}
    display: block;
    background-color: #f05454;
    border-radius: 15px;
    padding: 7px 15px;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.7);
    transition: all 0.5s ease;

    &:hover {
        text-decoration: none;
        color: white;
        transform: translateY(-2px);
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Navbar = ({toggle}) => {
    
    return(
        <Nav>
            <Logo to='/'>Aeroclub <GiBiplane /></Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                <NavMenuLink exact activeClassName='is-active' to='/'>Accueil</NavMenuLink>
                <NavMenuLink exact activeClassName='is-active' to='forfait'>Forfaits</NavMenuLink>
                <NavMenuLink exact activeClassName='is-active' to='avions'>Avions</NavMenuLink>
                <NavMenuLink exact activeClassName='is-active' to='avions'>Contact</NavMenuLink>
            </NavMenu>
            <NavMenuBtn exact activeClassName='is-active' to='/login'>Connexion</NavMenuBtn>
        </Nav>
    )
}

export default Navbar;