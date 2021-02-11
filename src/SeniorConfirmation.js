import React from 'react';
import helpconfirm from './images/HelpConfirm.svg';
import Navie from './Navie';
import Footer from './Footer';

function SeniorConfirmation() {
	return (
		<div>
			<Navie path='/navbar' component={Navie} />
			<div>
				<img src={helpconfirm}></img>
				<h2>Thank you for the submission!</h2>
				<p>
					Please reach out to the volunteer below within 1-3 business days by your
					preferred method of contact.
				</p>
			</div>
			<Footer path='/footer' component={Footer} />
		</div>
	);
}

export default SeniorConfirmation;
