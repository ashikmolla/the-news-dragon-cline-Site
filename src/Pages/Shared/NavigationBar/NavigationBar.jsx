
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch((error) => { console.error(error) });
    }
    return (
        <Container className='mb-4'>
            <Navbar collapseOnSelect expand="lg"  variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto align-items-center">

                            <Link to="/category/0" className='text-decoration-none'>Home</Link>
                            <Link to="/" className='text-decoration-none ms-3 me-3'>About</Link>
                            <Link to="/" className='text-decoration-none'>Career</Link>

                        
                        </Nav>
                        <Nav className="align-items-center gap-2">
                            {
                                user && <spen>{user.email} </spen>
                            }
                            {
                                user && <spen>{user.name} </spen>
                            }
                            {user &&

                                <FaUserCircle  style={{ fontSize: '2rem'  }}></FaUserCircle>

                            }
                            {user ?
                                <Link to="/login"> <Button onClick={handleLogOut} variant="dark">Log Out</Button></Link>
                                :
                                <Link to="/login"> <Button variant="dark">Login</Button></Link>
                            }
                            <Link to="/register"><Button variant="dark">Register</Button></Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;