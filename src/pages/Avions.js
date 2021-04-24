import React from 'react'
import styled from 'styled-components'
import Avion from '../components/Avion'

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

const Avions = () => {
    return (
        <Wrapper>
            <Avion />
        </Wrapper>
    )
}

export default Avions