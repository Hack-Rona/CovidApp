import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { APIURL } from './config';

function Volunteer(props) {
    const [error, setError] = useState(false);
	const [volunteer, setVolunteer] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		zipCode: '',
	});

	const handleChange = (event) => {
		event.persist();
		setVolunteer({
			...volunteer,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}volunteer/`;

		fetch(url, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(volunteer),
		})
			.then((response) => response.json())
			.then((volunteer) => {
				console.log('Success:', volunteer);
				setVolunteer(volunteer);
				console.log(volunteer);
			})
			.catch(() => {
				console.log('Error:', error);
				setError(true);
			});
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='firstname'>
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type='firstname'
						placeholder='Enter First Name'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='lastname'>
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type='lastname'
						placeholder='Enter Last Name'
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
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId='phone'>
					<Form.Label>Phone #</Form.Label>
					<Form.Control
						type='phone'
						placeholder='Phone #'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='zip'>
					<Form.Label>Zip Code</Form.Label>
					<Form.Control
						type='zip'
						placeholder='Zip Code'
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default Volunteer;
