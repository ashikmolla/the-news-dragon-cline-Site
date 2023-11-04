
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <Container className='align-items-center' >

            <Form className='border p-4 w-50 mx-auto my-auto'>
                <Form.Group className='text-center mb-5'>
                    <h1 className=''>Login your account</h1>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Form.Group className="text-center" controlId="formBasicCheckbox">
                    <Button className='px-5' variant="primary" type="submit">
                        Login
                    </Button>
                </Form.Group>
                <Form.Group className="text-center mt-4 " controlId="formBasicCheckbox">
                    <p>Don't Have an Account  ?<Link to="/register"> Register</Link></p>
                </Form.Group>



            </Form>
        </Container>

    );
};

export default Login;