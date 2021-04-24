import React, { useState, useEffect } from 'react'
import api from '../service/api.js'
import styled from 'styled-components'
import ImgOne from '../images/AA21.jpg'
import ImgTwo from '../images/PA28.jpg'

const Wrapper = styled.div`
    padding: 50px;

    h1 {
        color: #30475e;
        font-size: 2em;
        margin-bottom: 30px;
    }
`

const AvionWrappper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const AvionCard = styled.div`
    width: 25%;
    margin: 0 10px 40px 0;
    height: 280px;
    background: linear-gradient(to right bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.6));
    box-shadow: 6px 6px 20px rgba(0,0,0,0.2);
    border-radius: 20px;
    position: relative;
    transition: all 0.1s ease;
    overflow: hidden;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    span.fond {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.2);
        z-index: 2;
    }

    &:hover {
        transform: scale(1.02);
    }
`

const AvionInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 25px;
    right: 25px;
    z-index: 2;

    h3 {
        color: white;
        font-size: 1.3em;
        text-shadow: 2px 2px 0px rgba(0,0,0,0.7);
        margin-bottom: 90px;
    }
    span {
        color: white;
        text-shadow: 2px 2px 0px rgba(0,0,0,0.7);
        font-weight: 400;

        strong {
            color: #e6ffff;
        }
    }
`

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
            <Wrapper>
                <h1>Les avions</h1>            
                <AvionWrappper>
                    {
                        avions &&
                        avions.map((element) => {
                            return (
                                <AvionCard key={element.immatriculation+element.numAvion}>
                                    {element.type === "PA28" ? 
                                        <><img src={ImgTwo} alt=""/><span className="fond"></span></>
                                        :
                                        <><img src={ImgOne} alt=""/><span className="fond"></span></>
                                    }
                                    <AvionInfo>
                                        <h3>Avion {element.numAvion} :</h3>
                                        <span><strong>Type :</strong> {element.type}</span>
                                        <span><strong>Immat :</strong> {element.immatriculation}</span>
                                        <span><strong>Forfait compris (ref) :</strong> {
                                            element.id.map((element) => {
                                                return "n°"+element.substring(14)+" "
                                            })
                                        }</span>
                                    </AvionInfo>
                                </AvionCard>
                            )
                        })
                    }
                </AvionWrappper>
            </Wrapper>
        </>
    )
}

export default Avion