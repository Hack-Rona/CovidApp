import React from 'react';
import arrow from './images/upArrow.svg';
import './Footer.css';
import logo from './images/COVAIDLogo.png';

function Footer() {
	return (
		<footer className='foot'>
			<img className='logo' src={logo}></img>
			<img src={arrow} className='arrow' alt='up arrow' />
			<p className='arrow'>Top</p>
		</footer>
	);
}

export default Footer;
