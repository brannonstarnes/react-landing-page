import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavBarWrap } from "./navBarStyles";

export default function NavigationBar(){
    
    return (
        <>
            <NavBarWrap>
                <Navbar bg="dark" variant="dark" className='navbar' >
                    <Container>
                        <Navbar.Brand href="#home" className='logo'>The Travel Company</Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Services</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </NavBarWrap>
        </>
    )
};