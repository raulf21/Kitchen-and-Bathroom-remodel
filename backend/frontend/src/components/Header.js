import React, {Component} from 'react'
import {Navbar, Nav, Container, Row,Col} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {Link} from 'react-scroll'


function Header(){
    return(
    <header>
        <Navbar bg="light" expand="lg" collapseOnSelect>
          <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Elias Kitchen and Bathroom Remodel</Navbar.Brand>
          </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Row>
                        <Col md="auto"><li><Link  to="projects" spy={true} smooth={true} duration={500}>Projects</Link></li></Col>
                        <Col md="auto"><li><Link  to="about" spy={true} smooth={true} duration={500}>About</Link></li></Col>
                        <Col md="auto"><Link  to="contact" spy={true} smooth={true} duration={500}>Contact</Link></Col>
                    </Row>
                </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>

    </header>
    )

}
export default Header