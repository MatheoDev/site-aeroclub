import React, { useEffect, useState } from 'react'
import api from '../service/api.js'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {GrStatusGood} from 'react-icons/gr'

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

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
    const [load, setLoad] = useState()
    const classes = useStyles()

    useEffect(() => {
        async function fetchData() {
            const request = await api.getSeqvolUser(idmembre)
            setSeqvol(request.data)
            return request
        }
        fetchData()
        // membre && putId(membre.map((element) => { return element.numMembre }))
    }, [setSeqvol, load])

    const handleValidate = (numSeq) => {
        let config = {"forfaitInitiation": true}
        api.putSeqVol(numSeq, config)
        setLoad(true)
    }
    
    return (
        <Wrapper>
            <h1>Vos séquences de vols :</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date du vol</TableCell>
                            <TableCell align="right">Temps (h)</TableCell>
                            <TableCell align="right">Motif</TableCell>
                            <TableCell align="right">Avions</TableCell>
                            <TableCell align="right">Valider</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            seqvol &&
                            seqvol.map((element) => {
                                let validation
                                if (!element.forfaitInitiation) {
                                    validation = <input type="submit" value="valider" onClick={() => handleValidate(element.numSeq)} />
                                } else {
                                    validation = <GrStatusGood />
                                }
                                return (
                                    <TableRow key={element.numSeq+element.date}>
                                        <TableCell component="th" scope="row">
                                            {element.date.substring(0,10)}
                                        </TableCell>
                                        <TableCell align="right">{element.temps} h</TableCell>
                                        <TableCell align="right">{element.motif}</TableCell>
                                        <TableCell align="right">n°{element.numAvion.substring(12)}</TableCell>
                                        <TableCell align="right">{validation}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Wrapper>
    )
}

export default SeqVolAccount