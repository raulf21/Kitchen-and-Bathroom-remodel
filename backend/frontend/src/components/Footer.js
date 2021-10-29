import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
function Footer(){
    return(
    <footer>
        <Container>
            <Row>
                <Col className ="text-center py-3">Copyright &copy; Elias Remodel All Rights Reserved </Col>
                <Col className = "text-right py-3"> Contact: <br/>Phone Number: 650445-5938 <br/> Email: eliaservinn@gmail.com</Col>
            </Row>
        </Container>
    </footer>
    )

}
export default Footer