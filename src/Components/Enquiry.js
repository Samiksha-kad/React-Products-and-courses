import React, { useState, useEffect } from 'react'
import { Col, Row,Container } from 'react-bootstrap'
import axios from 'axios'
import './Enquiry.css'
function Enquiry() {
    const [state, setstate] = useState([])

    useEffect(() => {
        const url = "http://localhost:3002/products"
        axios.get(url)
            .then(res => {
                setstate(res.data)
            })

    }, [])
    return (
        <div>
            <Container>
                <h2 className="market__h2">Marketing Team Survey</h2>
           <img src="chart.gif" alt="..." className="chart"></img>
            <h3 className="market__h3">Enquiry Details</h3>
            </Container>

            <Container>

            {state.map(data => (
                <>
                <Container className="language">
                    <p>{data.enquiry}</p>
                </Container>
                <Container className="data_set">
                    <p>Name:{data.name}</p>
                    <p>Address:{data.email}</p>
                    <p>Mobile:{data.mobile}</p>
                    <p>Message:{data.message}</p>
                </Container>
                </>
            ))}
            </Container>

        </div>
    )
}

export default Enquiry
