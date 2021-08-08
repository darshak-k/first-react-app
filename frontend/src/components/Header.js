import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'


const Header = () => {
    return (
        <header>

            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">IELTS Test</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mr-auto">
                            <NavDropdown title="IELTS Exam" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/academic-test">Academic Test</NavDropdown.Item>
                                <NavDropdown.Item href="/general-test">General Test</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <Nav.Link href="/signup"><i class="fas fa-user-plus"></i> Sign Up</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/login"><i className='fas fa-user'></i> Log In</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
