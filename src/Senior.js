import React, { useState } from 'react';
import { Form, Button, Container, Dropdown } from 'react-bootstrap';
import { APIURL } from './config';

function Senior(props) {
	const [error, setError] = useState(false);
	const [senior, setSenior] = useState({
		name: '',
		city: '',
		state: '',
		zipCode: '',
		phoneNumber: '',
		email: '',

	});

	const handleChange = (event) => {
		event.persist();
		setSenior({
			...senior,
			[event.target.name]: event.target.value,
		});
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
			<h2>Tell us about you</h2>
			<h6>This information will be kept confidential</h6>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='name'
						placeholder='Enter Full Name'
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId='city'>
					<Form.Label>City</Form.Label>
					<Form.Control
						type='city'
						placeholder='Enter City'
						onChange={handleChange}
					/>
				</Form.Group>

				<Dropdown>
					<Form.Label>State</Form.Label>
					<br />
					<Dropdown.Toggle></Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item>AL</Dropdown.Item>
						<Dropdown.Item>AK</Dropdown.Item>
						<Dropdown.Item>AR</Dropdown.Item>
						<Dropdown.Item>AZ</Dropdown.Item>
						<Dropdown.Item>CA</Dropdown.Item>
						<Dropdown.Item>CO</Dropdown.Item>
						<Dropdown.Item>CT</Dropdown.Item>
						<Dropdown.Item>DC</Dropdown.Item>
						<Dropdown.Item>DE</Dropdown.Item>
						<Dropdown.Item>FL</Dropdown.Item>
						<Dropdown.Item>GA</Dropdown.Item>
						<Dropdown.Item>HI</Dropdown.Item>
						<Dropdown.Item>IA</Dropdown.Item>
						<Dropdown.Item>ID</Dropdown.Item>
						<Dropdown.Item>IL</Dropdown.Item>
						<Dropdown.Item>IN</Dropdown.Item>
						<Dropdown.Item>KS</Dropdown.Item>
						<Dropdown.Item>KY</Dropdown.Item>
						<Dropdown.Item>LA</Dropdown.Item>
						<Dropdown.Item>MA</Dropdown.Item>
						<Dropdown.Item>MD</Dropdown.Item>
						<Dropdown.Item>ME</Dropdown.Item>
						<Dropdown.Item>MI</Dropdown.Item>
						<Dropdown.Item>MN</Dropdown.Item>
						<Dropdown.Item>MO</Dropdown.Item>
						<Dropdown.Item>MS</Dropdown.Item>
						<Dropdown.Item>MT</Dropdown.Item>
						<Dropdown.Item>NC</Dropdown.Item>
						<Dropdown.Item>ND</Dropdown.Item>
						<Dropdown.Item>NE</Dropdown.Item>
						<Dropdown.Item>NH</Dropdown.Item>
						<Dropdown.Item>NJ</Dropdown.Item>
						<Dropdown.Item>NM</Dropdown.Item>
						<Dropdown.Item>NV</Dropdown.Item>
						<Dropdown.Item>NY</Dropdown.Item>
						<Dropdown.Item>OH</Dropdown.Item>
						<Dropdown.Item>OK</Dropdown.Item>
						<Dropdown.Item>OR</Dropdown.Item>
						<Dropdown.Item>PA</Dropdown.Item>
						<Dropdown.Item>RI</Dropdown.Item>
						<Dropdown.Item>SC</Dropdown.Item>
						<Dropdown.Item>SD</Dropdown.Item>
						<Dropdown.Item>TN</Dropdown.Item>
						<Dropdown.Item>TX</Dropdown.Item>
						<Dropdown.Item>UT</Dropdown.Item>
						<Dropdown.Item>VA</Dropdown.Item>
						<Dropdown.Item>VT</Dropdown.Item>
						<Dropdown.Item>WA</Dropdown.Item>
						<Dropdown.Item>WI</Dropdown.Item>
						<Dropdown.Item>WV</Dropdown.Item>
						<Dropdown.Item>WY</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Form.Group controlId='zip'>
					<Form.Label>Zip Code</Form.Label>
					<Form.Control
						type='zip'
						placeholder='Zip Code'
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId='phone'>
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type='phone'
						placeholder='Phone Number'
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default Senior;
