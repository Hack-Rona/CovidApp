import React from 'react';
import arrow from './images/upArrow.svg';
import './Footer.css';

function Footer() {
    return (
        <footer className='foot'>
            <p>COV-AID</p>
            <img src={arrow} className='arrow' alt='up arrow'/>
            <p className='arrow'>Top</p>
        </footer>
    );
}

export default Footer;