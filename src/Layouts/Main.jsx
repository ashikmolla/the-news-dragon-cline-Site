import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNave from '../Pages/Shared/RightNave/RightNave';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar></NavigationBar>

            <Container>

                <Row>
                    <Col sm={12} md={3} lg={3}>
                        <LeftNav />
                    </Col>

                    <Col sm={12} md={9} lg={6}>

                        <Outlet></Outlet>
                    </Col>
                    <Col sm={12} lg={3}>
                        <RightNave />
                    </Col>
                </Row>
            </Container>




            <Footer />

        </div>
    );
};

export default Main;