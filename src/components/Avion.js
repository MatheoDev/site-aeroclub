import React, { useState, useEffect } from 'react'
import api from '../service/api.js'

const Avion = () => {
    const [avions, setAvions] = useState()

    useEffect(() => {
        async function fetchData() {
            const request = await api.getAvions()
            setAvions(request.data)
            return request
        }
        fetchData()
    }, [setAvions])

    return (
        <>
            {
                avions &&
                avions.map((element) => {
                    return (
                        <div key={element.immatriculation+element.id}>
                            {element.immatriculation}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Avion