import React from 'react'
import styled, { css } from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Nav = styled.nav`
    width: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    background: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3));
`

const NavLinkS = css`
    padding: 10px 0;
    text-decoration: none;
    transition: all 0.5s ease;
    color: #30475e;
    font-weight: 600;

    &.is-active, &:hover {
        background-color: rgba(255,255,255,0.4);
    }
`

const Logo = styled.div`
    ${NavLinkS}
    font-size: 2em;
    font-weight: 400;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`

const MenuBars = styled(FaBars)`
    display: none;
`

const NavMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const NavMenuLink = styled(NavLink)`
    ${NavLinkS}
`

const NavMenuBtn = styled(NavLink)`
    background: #f05454;
    text-decoration: none;
    color: white;
    font-weight: 600;
    padding: 15px 25px;
    transition: all 0.5s ease;
    border-radius: 20px;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.5);

    &:hover {
        text-decoration: none;
        color: white;
        transform: translateY(-2px);
        background: #ed2c2c;
    }
    
`

const Navbar = ({toggle, login, isAuth}) => {

    const handleClick = (e) => {
        isAuth(false)
    }
    
    return(
        <Nav>
            <Logo to='/'>Aeroclub</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                <NavMenuLink exact activeClassName='is-active' to='/'>Accueil</NavMenuLink>
                <NavMenuLink exact activeClassName='is-active' to='/forfaits'>Forfaits</NavMenuLink>
                <NavMenuLink exact activeClassName='is-active' to='/avions'>Avions</NavMenuLink>
                <NavMenuLink exact activeClassName='is-active' to='/contact'>Contact</NavMenuLink>
                {
                    login && 
                    <NavMenuLink exact activeClassName='is-active' to='/mon-compte'>Mon compte</NavMenuLink>
                }
            </NavMenu>
            {
                login ? 
                <NavMenuBtn exact activeClassName='is-active' to='/' onClick={handleClick}>Se déconnecter</NavMenuBtn>
                :
                <NavMenuBtn exact activeClassName='is-active' to='/login'>Connexion</NavMenuBtn>
            }
            
        </Nav>
    )
}

export default Navbar;