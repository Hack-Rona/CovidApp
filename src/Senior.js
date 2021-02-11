import React, { useState } from 'react';
import { Form, Button, Container, Dropdown } from 'react-bootstrap';
import { APIURL } from './config';
import Navie from './Navie';
import './Senior.css';
import worksrecipient from './images/howthisworksrecipient.svg';
import fillform from './images/fillformbelow.svg';
import allset from './images/allsetman.svg';
import Footer from './Footer';

function Senior(props) {
	const [error, setError] = useState(false);
	const [senior, setSenior] = useState({
		name: '',
		city: '',
		state: '',
		zipCode: '',
		phoneNumber: '',
		email: '',
		help: '',
		contact: '',
	});

	const handleChange = (event) => {
		event.persist();
		setSenior({
			...senior,
			[event.target.name]: event.target.value,
		});
	};

	const handleSelect = (event) => {
		setSenior({
			...senior,
			[event]: event.eventKey,
		});
		console.log(event);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}senior/`;

		fetch(url, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(senior),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setSenior(data);
				console.log(senior);
			})
			.catch(() => {
				console.log('Error:', error);
				setError(true);
			});
	};

	return (
		<Container>
			<Navie path='/navbar' component={Navie} />
			<div className='top-panel'>
				<p>How this works</p>
				<img className='panel-image' src={worksrecipient}></img>
				<p>
					You are eligible for the vaccination, but are having difficulties.
				</p>
			</div>
			<div className='panel-image' className='middle-panel'>
				<img src={fillform}></img>
				<p>Fill the form below to get started.</p>
			</div>
			<div className='bottom-panel'>
				<img className='panel-image' src={allset}></img>
				<p>All set! Someone will be in touch in 1 to 3 days.</p>
			</div>
			<br></br>
			<h2>Tell us about you</h2>
			<h6>This information will be kept confidential</h6>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='name'
						name='name'
						placeholder='Enter Full Name'
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId='city'>
					<Form.Label>City</Form.Label>
					<Form.Control
						type='city'
						name='city'
						placeholder='Enter City'
						onChange={handleChange}
					/>
				</Form.Group>

				<Dropdown>
					<Form.Label>State</Form.Label>
					<br />
					<Dropdown.Toggle></Dropdown.Toggle>

					<Dropdown.Menu style={{ maxHeight: '20em', overflowY: 'scroll' }}>
						<Dropdown.Item
							eventKey='AL'
							type='state'
							name='state'
							onSelect={handleSelect}>
							AL
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='AK'
							type='state'
							name='state'
							onSelect={handleSelect}>
							AK
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='AR'
							type='state'
							name='state'
							onSelect={handleSelect}>
							AR
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='AZ'
							type='state'
							name='state'
							onSelect={handleSelect}>
							AZ
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='CA'
							type='state'
							name='state'
							onSelect={handleSelect}>
							CA
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='CO'
							type='state'
							name='state'
							onSelect={handleSelect}>
							CO
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='CT'
							type='state'
							name='state'
							onSelect={handleSelect}>
							CT
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='DC'
							type='state'
							name='state'
							onSelect={handleSelect}>
							DC
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='DE'
							type='state'
							name='state'
							onSelect={handleSelect}>
							DE
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='FL'
							type='state'
							name='state'
							onSelect={handleSelect}>
							FL
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='GA'
							type='state'
							name='state'
							onSelect={handleSelect}>
							GA
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='HI'
							type='state'
							name='state'
							onSelect={handleSelect}>
							HI
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='IA'
							type='state'
							name='state'
							onSelect={handleSelect}>
							IA
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='ID'
							type='state'
							name='state'
							onSelect={handleSelect}>
							ID
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='IL'
							type='state'
							name='state'
							onSelect={handleSelect}>
							IL
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='IN'
							type='state'
							name='state'
							onSelect={handleSelect}>
							IN
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='KS'
							type='state'
							name='state'
							onSelect={handleSelect}>
							KS
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='KY'
							type='state'
							name='state'
							onSelect={handleSelect}>
							KY
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='LA'
							type='state'
							name='state'
							onSelect={handleSelect}>
							LA
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='MA'
							type='state'
							name='state'
							onSelect={handleSelect}>
							MA
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='MD'
							type='state'
							name='state'
							onSelect={handleSelect}>
							MD
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='ME'
							type='state'
							name='state'
							onSelect={handleSelect}>
							ME
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='MI'
							type='state'
							name='state'
							onSelect={handleSelect}>
							MI
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='MN'
							type='state'
							name='state'
							onSelect={handleSelect}>
							MN
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='MO'
							type='state'
							name='state'
							onSelect={handleSelect}>
							MO
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='MS'
							type='state'
							name='state'
							onSelect={handleSelect}>
							MS
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='MT'
							type='state'
							name='state'
							onSelect={handleSelect}>
							MT
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='NC'
							type='state'
							name='state'
							onSelect={handleSelect}>
							NC
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='ND'
							type='state'
							name='state'
							onSelect={handleSelect}>
							ND
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='NE'
							type='state'
							name='state'
							onSelect={handleSelect}>
							NE
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='NH'
							type='state'
							name='state'
							onSelect={handleSelect}>
							NH
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='NJ'
							type='state'
							name='state'
							onSelect={handleSelect}>
							NJ
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='NM'
							type='state'
							name='state'
							onSelect={handleSelect}>
							NM
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='NV'
							type='state'
							name='state'
							onSelect={handleSelect}>
							NV
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='NY'
							type='state'
							name='state'
							onSelect={handleSelect}>
							NY
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='OH'
							type='state'
							name='state'
							onSelect={handleSelect}>
							OH
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='OK'
							type='state'
							name='state'
							onSelect={handleSelect}>
							OK
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='OR'
							type='state'
							name='state'
							onSelect={handleSelect}>
							OR
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='PA'
							type='state'
							name='state'
							onSelect={handleSelect}>
							PA
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='RI'
							type='state'
							name='state'
							onSelect={handleSelect}>
							RI
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='SC'
							type='state'
							name='state'
							onSelect={handleSelect}>
							SC
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='SD'
							type='state'
							name='state'
							onSelect={handleSelect}>
							SD
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='TN'
							type='state'
							name='state'
							onSelect={handleSelect}>
							TN
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='TX'
							type='state'
							name='state'
							onSelect={handleSelect}>
							TX
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='UT'
							type='state'
							name='state'
							onSelect={handleSelect}>
							UT
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='VA'
							type='state'
							name='state'
							onSelect={handleSelect}>
							VA
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='VT'
							type='state'
							name='state'
							onSelect={handleSelect}>
							VT
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='WA'
							type='state'
							name='state'
							onSelect={handleSelect}>
							WA
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='WI'
							type='state'
							name='state'
							onSelect={handleSelect}>
							WI
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='WV'
							type='state'
							name='state'
							onSelect={handleSelect}>
							WV
						</Dropdown.Item>
						<Dropdown.Item
							eventKey='WY'
							type='state'
							name='state'
							onSelect={handleSelect}>
							WY
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Form.Group controlId='zip'>
					<Form.Label>Zip Code</Form.Label>
					<Form.Control
						type='zip'
						name='zip'
						placeholder='Zip Code'
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId='phone'>
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type='phone'
						name='phone'
						placeholder='Phone Number'
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						name='email'
						placeholder='Enter email'
						onChange={handleChange}
					/>
				</Form.Group>

				<h6>What type of help are you looking for?</h6>
				<div onChange={handleChange}>
					<input type='radio' id='settingUp' name='help' value='settingUp' />
					<label htmlFor='settingUp'>
						I need help setting up a vaccination
					</label>
					<br />
					<input type='radio' id='driveMe' name='help' value='driveMe' />
					<label htmlFor='driveMe'>
						I need help getting to a vaccination appointment
					</label>
					<br />
					<input type='radio' id='both' name='help' value='both' />
					<label htmlFor='both'>Both</label>
					<br />
				</div>
				<h6>What is your preferred contact method?</h6>
				<div onChange={handleChange}>
					<input type='radio' id='phone' name='contact' value='phone' />
					<label htmlFor='phone'>Phone</label>
					<br />
					<input type='radio' id='email' name='contact' value='email' />
					<label htmlFor='email'> E-mail</label>
					<br />
				</div>
				<button className='button' type='submit'>
					Submit
				</button>
			</Form>
			<br></br>
			<Footer path='/footer' component={Footer} />
		</Container>
	);
}

export default Senior;
