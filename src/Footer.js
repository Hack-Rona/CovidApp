import React from 'react';
import arrow from './images/upArrow.svg';
import './Footer.css';

function Footer() {
    return (
			<div className='foot'>
				<p className='logo'>COV-AID</p>
				<img src={arrow} className='arrow' alt='up arrow' />
				<br />
				<br />
				<p className='top'>Top</p>
			</div>
		);
}

export default Footer;