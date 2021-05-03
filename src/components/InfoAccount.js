import React, { useEffect, useState } from 'react'
import api from '../service/api.js'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 40px;
    padding: 30px 40px;

    h1 {
        color: #30475e;
        font-size: 1.8em;
        margin-bottom: 30px;
    }

    div.item {
        strong {
            color: #30475e;
        }
    }

    div.item.span {
        display: flex;
        span {
            width: 280px;
            display: block;
        }
    }

    background-color: rgba(255,255,255,0.5);
    box-shadow: 4px 4px 10px rgba(0,0,0,0.2);
    border-radius: 30px;
`

const InfoAccount = ({putId}) => {
    const [membre, setMembre] = useState()

    

    useEffect(() => {
        async function fetchData() {
            const request = await api.getCurrentMembre(localStorage.getItem('idUser'))
            setMembre(request.data)
            return request
        }
        fetchData()
        // membre && putId(membre.map((element) => { return element.numMembre }))
    }, [setMembre])

    useEffect(() => {
        membre && putId(membre.map((element) => { return element.numMembre }))
    }, [membre])
    
    return (
        <Wrapper>
            <h1>Vos informations :</h1>
            {
                membre &&
                membre.map((element) => {
                    return (
                        <div className="info" key={element.numMembre+element.nom}>
                            <div className="item span"><span><strong>Nom :</strong> {element.nom}</span><span><strong>Prénom :</strong> {element.prenom}</span></div>
                            <div className="item span"><span><strong>Tel :</strong> {element.tel}</span><span><strong>Email :</strong> {element.email}</span></div>
                            <div className="item"><strong>Adresse :</strong> {element.adresse}, {element.codePostal}, {element.ville}</div>
                            <div className="item"><strong>Profession :</strong> {element.profession}</div>
                        </div>
                    )
                })
            }
        </Wrapper>
    )
}

export default InfoAccount