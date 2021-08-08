import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col claaName='text-center py-3'>
                        Copyright &copy; Darshak Kachchhi
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
