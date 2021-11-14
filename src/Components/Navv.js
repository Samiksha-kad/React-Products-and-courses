import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
function Navv() {
    return (
        <>
            <Navbar bg="dark" >
        <Container>
            <Navbar.Brand href="#home" >NeoSOFT Technologies</Navbar.Brand>
            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
            <Nav.Link as={NavLink} to="./course">Courses</Nav.Link>
            <Nav.Link as={NavLink} to="./enquiry">Enquiry Details</Nav.Link>
            <Nav.Link as={NavLink} to="./forms">Enquiry Details</Nav.Link>
        </Container>
        </Navbar>
        </>
    )
}

export default Navv
