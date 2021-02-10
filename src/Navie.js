import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function Navie(props) {
    return (
			<Navbar bg='light' expand='lg'>
				<Navbar.Brand href='#home'>Nav Bar</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/senior'>Get Help</Nav.Link>
						<Nav.Link href='/volunteer'>Volunteer</Nav.Link>
						<Nav.Link href='/news'>News Feed</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
}

export default Navie;