import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
const Register = () => {
    const [error, setError] = useState('')
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [accepte, setAccepet] = useState(false)

    const handleRegisterSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photoUrl = event.target.name.value;
        console.log(email, password, name, photoUrl)
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                event.target.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage)
                setError(errorMessage)
            })
    }

    const handelSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                // console.log(result.user)
            })
            .catch(error => {
                // console.error(error)
            })


    }


    // condition for accepted box 
    const handelChackBox = (event) => {
        const look = event.target.checked;
        // console.log(look)
        setAccepet(look)
    }



    return (

        <>
            <Container className='align-items-center' >

                <Form onSubmit={handleRegisterSubmit} className='border p-4 w-50 mx-auto my-auto'>
                    <Form.Group className='text-center mb-5'>
                        <h1 className=''>Register your account</h1>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control name='photourl' type="text" placeholder="Enter Photo Rrl" required />
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
                        <Form.Check
                            onClick={handelChackBox}
                            name='accept' type="checkbox"
                            label={<> Accept Our  <Link style={{ textDecoration: 'none', color: "#ff5200" }} to="/regTrems">Condition</Link>
                            </>} />
                    </Form.Group>



                    <Form.Group className="text-center mt-4 " controlId="formBasicCheckbox">
                        <span>{error}</span>
                    </Form.Group>

                    <Form.Group className="text-center" controlId="formBasicCheckbox">
                        <Button className='px-5' disabled={!accepte} variant="primary" type="submit">
                            Register
                        </Button>
                    </Form.Group>
                    <Form.Group className="text-center mt-4 " controlId="formBasicCheckbox">
                        <p>Allrady have an Account  ?<Link to="/login"> Login</Link></p>
                    </Form.Group>


                    <Form.Group className="text-center " controlId="formBasicCheckbox">
                        <Button onClick={handelSignInWithGoogle} style={{ backgroundColor: "#34A853", border: 'none' }} >
                            <FaGoogle style={{ fontSize: '2rem', color: '##34A853' }} />
                        </Button>
                    </Form.Group>



                </Form>
            </Container>
        </>
    );
};

export default Register;