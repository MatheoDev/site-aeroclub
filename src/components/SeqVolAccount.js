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

    background-color: rgba(255,255,255,0.5);
    box-shadow: 4px 4px 10px rgba(0,0,0,0.2);
    border-radius: 30px;
`

const SeqVolAccount = ({idmembre}) => {
    const [seqvol, setSeqvol] = useState()

    useEffect(() => {
        async function fetchData() {
            const request = await api.getSeqvolUser(idmembre)
            setSeqvol(request.data)
            return request
        }
        fetchData()
        // membre && putId(membre.map((element) => { return element.numMembre }))
    }, [setSeqvol])
    
    return (
        <Wrapper>
            <h1>Vos séquences de vols :</h1>
            {
                seqvol &&
                seqvol.map((element) => {
                    return (
                        <div key={element.numSeq+element.date}>{element.numSeq}</div>
                    )
                })
            }
        </Wrapper>
    )
}

export default SeqVolAccount