import React, { useState, useEffect } from 'react'
import api from '../service/api.js'

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
        <>
            {  
                forfaits &&
                forfaits.map((element) => {
                    return (
                        <div key={element.id}>
                            {element.libelle}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Forfait