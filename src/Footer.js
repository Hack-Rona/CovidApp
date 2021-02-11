import React from 'react';
import arrow from './images/upArrow.svg';
import './Footer.css';

function Footer() {
	return (
		<div className='foot'>
			<p className='logo'>COV-AID</p>
			<a href='#topper'>
				<img src={arrow} className='arrow' alt='up arrow' />
				<br />
				<br />
				<p className='top'>Top</p>
			</a>
		</div>
	);
}

export default Footer;
