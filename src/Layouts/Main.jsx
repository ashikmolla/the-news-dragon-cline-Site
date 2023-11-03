import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNave from '../Pages/Shared/RightNave/RightNave';

const Main = () => {
    return (
        <div>
            <Header />




            <Container>

            <Row>
                    <Col lg={3}>
                     <LeftNav/>
                    </Col>

                    <Col lg={6}>
                    
                    <h1>Come sooone</h1>
                    </Col>
                    <Col lg={3}>
                      <RightNave/>
                    </Col>
                </Row>
            </Container>




            <Footer />

        </div>
    );
};

export default Main;