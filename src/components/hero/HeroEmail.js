import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'

export default function HeroEmail(){

    return (
        <Form className="heroEmailForm">
            <Form.Group className="mb-3" as={Row} controlId="formBasicEmail">
                <Form.Control className="emailInput" type="email" placeholder="Enter email" />
                
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};