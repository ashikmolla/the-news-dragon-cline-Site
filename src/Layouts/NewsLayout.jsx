import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNave from '../Pages/Shared/RightNave/RightNave';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';


const NewsLayout = () => {
    return (
        <div>
            <Header />
            <NavigationBar/>
            <Container>

                <Row>
                    

                    <Col lg={9}>

                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNave />
                    </Col>
                </Row>
            </Container>


            <Footer />

        </div>
    );
};

export default NewsLayout;