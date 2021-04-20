import React, { useState, useEffect } from 'react'
import api from '../service/api.js'
import styled from 'styled-components'
import {GiAirplane} from 'react-icons/gi'

const Wrapper = styled.div`
    padding: 50px;

    h1 {
        color: #30475e;
        font-size: 2em;
        margin-bottom: 30px;
    }
`

const ForfaitWrappper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const ForfaitCard = styled.div`
    width: 25%;
    margin: 0 10px 40px 0;
    height: 200px;
    background: linear-gradient(to right bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.6));
    box-shadow: 6px 6px 20px rgba(0,0,0,0.2);
    border-radius: 20px;
    position: relative;
    transition: all 0.1s ease;

    span.icon {
        display: block;
        font-size: 2.5em;
        margin: 30px 0 0 30px;
    }

    &:hover {
        transform: scale(1.02);
    }
`

const ForfaitInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 30px;

    h3 {
        color: #30475e;
        font-size: 1.3em;
    }
    span {
        color: #30475e;
        font-weight: 400;
    }
`

const Forfait = () => {
    const [forfaits, setForfaits] = useState()

    useEffect(() => {
        async function fetchData() {
            const request = await api.getForfaits()
            setForfaits(request.data)
            return request
        }
        fetchData()
    }, [setForfaits])

    return (
        <Wrapper>
            <h1>Les forfaits</h1>            
            <ForfaitWrappper>
                {
                    forfaits &&
                    forfaits.map((element) => {
                        return (
                            <ForfaitCard key={element.libelle+element.id}>
                                <span className="icon"><GiAirplane /></span>
                                <ForfaitInfo>
                                    <h3>{element.libelle}</h3>
                                    <span>Heure : {element.heure}h</span>
                                    <span>Prix : {element.prix}€</span>
                                </ForfaitInfo>
                            </ForfaitCard>
                        )
                    })
                }
            </ForfaitWrappper>
        </Wrapper>
    )
}

export default Forfait