import React from 'react';
import volconfirm from './images/volunteerconfirm.svg';
import Navie from './Navie';
import Footer from './Footer';

function VolunteerConfirmation() {
	return (
		<div>
			<Navie path='/navbar' component={Navie} />
			<div>
				<img src={volconfirm}></img>
				<h2>
					We appreciate the desire to volunteer with people who really need you!
				</h2>
				<p>Give us 1 to 3 business days to email you back.</p>
				<p>Thank you!!!</p>
			</div>
			<Footer path='/footer' component={Footer} />
		</div>
	);
}

export default VolunteerConfirmation;
