import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar(props) {
    
    return (
        <Navbar expand="lg" className='secondary-menu'>
            <Container>
                <Navbar.Brand href="/portal"><img
                    src='../../images/logo_poli_bianco_260.png'
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse >
                    <Nav className="me-auto bg-white rounded m-auto">
                        {props.user.type === 'student'? <Nav.Link className='text-dark' href="/">Thesis</Nav.Link> : <Nav.Link href="/">Applications</Nav.Link>}
                        {props.user.type === 'student'? <Nav.Link className='text-dark' href="/">My Applications</Nav.Link> : <Nav.Link href="/">My Proposals</Nav.Link>}
                    </Nav>
                    <NavDropdown title={
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    }>
                        <NavDropdown.Item href="/portal">My Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/portal">Settings</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
}

export default MyNavbar