import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNave from '../Pages/Shared/RightNave/RightNave';
import { Outlet } from 'react-router-dom';


const NewsLayout = () => {
    return (
        <div>
            <Header />

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