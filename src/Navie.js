import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navie.css';
import logo from './COVAIDLogo.png';

function Navie() {
	return (
		<div className='top'>
			<Navbar expand='lg'>
				<Navbar.Brand href='#home'>
					<img src={logo} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/senior'>Get Help</Nav.Link>
						<Nav.Link href='/volunteer'>Volunteer</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Navie;
