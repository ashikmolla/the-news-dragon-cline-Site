import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button, ListGroup } from 'react-bootstrap';
import bgPng from '../../../assets/bg.png';
import './RightNav.css'
import QZone from '../QZone/QZone';


const RightNave = () => {
    return (
        <div>
            <h4> Login with</h4>
            <Button variant="outline-primary" size='lg'><FaGoogle /> Login with Google</Button>
            <Button variant="outline-dark" size='lg' > <FaGithub /> Login with Github</Button>
            <div className="my-4">
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> <a href="https://www.facebook.com/profile.php?id=100049388054800" target="_blank" rel="noopener noreferrer"> Facbook</a></ListGroup.Item>
                    <ListGroup.Item><FaLinkedin /> <a href="https://www.linkedin.com/in/ashik-molla-228ab5289" target="_blank" rel="noopener noreferrer"> Facbook</a></ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> <a href="https://www.instagram.com/alliakbooribneashik/" target="_blank" rel="noopener noreferrer">Instagram</a></ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> <a href="https://twitter.com/login?lang=en" target="_blank" rel="noopener noreferrer">Twitter</a></ListGroup.Item>
                </ListGroup>
            </div>
            <QZone/>
            <div className='text-center bgpng'>
                <img className='rounded' src={bgPng} alt="" />
                <div className='bgpngDetils'>
                    <h3>Create an Amazing Newspaper</h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>{' '}
                </div>

            </div>
        </div>
    );
};

export default RightNave;