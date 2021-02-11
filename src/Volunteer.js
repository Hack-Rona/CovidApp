import React, { useState } from "react";
import { Form, Button, Container, Dropdown } from "react-bootstrap";
import { APIURL } from "./config";
import Navie from "./Navie";
import "./Volunteer.css";
import worksvolunteer from "./images/howthisworksvolunteer.svg";
import fillform from "./images/fillformbelow.svg";
import allset from "./images/allsetman.svg";
import Footer from "./Footer";

function Volunteer(props) {
	const [error, setError] = useState(false);
	const [volunteer, setVolunteer] = useState({
		name: '',
		city: '',
		state: '',
		zipCode: '',
		phoneNumber: '',
		email: '',
		cap: '',
		vacc: '',
		date: '',
		inperson: '',
	});
  
  const handleChange = (event) => {
    event.persist();
    setVolunteer({
      ...volunteer,
      [event.target.name]: event.target.value,
    });
  };
  
	// const handleSelect = (event) => {
	// 	setVolunteer({
	// 		...volunteer,
	// 		[event]: event.eventKey,
	// 	});
	// 	console.log(event);
	// };

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}volunteers/`;

		fetch(url, {
			method: 'POST',
			mode: 'no-cors',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(volunteer),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log('Success:', response);
				setVolunteer(response);
				console.log(response);
				window.location = '/seniorconfirmation';
			})
			.catch(() => {
				console.log('Error:', error);
				setError(true);
				window.location = '/seniorconfirmation';
			});
	};

	return (
		<div>
			<div>
				<Navie path='/navbar' component={Navie} />
			</div>
			<div className='top-panel'>
				<br></br>
				<h2>How this works</h2>
				<img className='panel-image' src={worksvolunteer}></img>
				<p>
					You have the desire to help your community by becoming a volunteer.
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
			<Container>
				<br></br>
				<h2>Volunteer Form</h2>
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

          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="city"
              name="city"
              placeholder="Enter City"
              onChange={handleChange}
            />
          </Form.Group>

					<Form.Group controlId='state'>
						<Form.Label>State</Form.Label>
						<Form.Control
							type='state'
							name='state'
							placeholder='Enter State'
							onChange={handleChange}
						/>
					</Form.Group>

					{/* <Dropdown>
						<Form.Label>State</Form.Label>
						<br />
						<Dropdown.Toggle></Dropdown.Toggle>

						<Dropdown.Menu
							onSelect={handleSelect}
							style={{ maxHeight: '20em', overflowY: 'scroll' }}>
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
					</Dropdown> */}

					<Form.Group controlId='zipCode'>
						<Form.Label>Zip Code</Form.Label>
						<Form.Control
							type='zipCode'
							name='zipCode'
							placeholder='Zip Code'
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group controlId='phoneNumber'>
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							type='phoneNumber'
							name='phoneNumber'
							placeholder='Phone Number'
							onChange={handleChange}
						/>
					</Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </Form.Group>

					{/* <Dropdown>
						<Form.Label>
							How many people do you want to help per week?
						</Form.Label>
						<br />
						<Dropdown.Toggle></Dropdown.Toggle>

						<Dropdown.Menu
							onSelect={handleSelect}
							style={{ maxHeight: '20em', overflowY: 'scroll' }}>
							<Dropdown.Item
								eventKey='1'
								type='cap'
								name='cap'
								onSelect={handleSelect}>
								1
							</Dropdown.Item>
							<Dropdown.Item
								eventKey='2'
								type='cap'
								name='cap'
								onSelect={handleSelect}>
								2
							</Dropdown.Item>
							<Dropdown.Item
								eventKey='3'
								type='cap'
								name='cap'
								onSelect={handleSelect}>
								3
							</Dropdown.Item>
							<Dropdown.Item
								eventKey='4'
								type='cap'
								name='cap'
								onSelect={handleSelect}>
								4
							</Dropdown.Item>
							<Dropdown.Item
								eventKey='5'
								type='cap'
								name='cap'
								onSelect={handleSelect}>
								5
							</Dropdown.Item>
							<Dropdown.Item
								eventKey='6'
								type='cap'
								name='cap'
								onSelect={handleSelect}>
								6
							</Dropdown.Item>
							<Dropdown.Item
								eventKey='7'
								type='cap'
								name='cap'
								onSelect={handleSelect}>
								7
							</Dropdown.Item>
							<Dropdown.Item
								eventKey='8'
								type='cap'
								name='cap'
								onSelect={handleSelect}>
								8
							</Dropdown.Item>
							<Dropdown.Item
								eventKey='9'
								type='cap'
								name='cap'
								onSelect={handleSelect}>
								9
							</Dropdown.Item>
							<Dropdown.Item
								eventKey='10'
								type='cap'
								name='cap'
								onSelect={handleSelect}>
								10
							</Dropdown.Item>
							<Dropdown.Item
								eventKey='10+'
								type='cap'
								name='cap'
								onSelect={handleSelect}>
								10+
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown> */}
					<Form.Group controlId='cap'>
						<Form.Label>Number of people you are willing to help per week</Form.Label>
						<Form.Control
							type='cap'
							name='cap'
							placeholder='Number per week'
							onChange={handleChange}
						/>
					</Form.Group>

					<br />

					<h6>Have you been vaccinated?</h6>
					<div onChange={handleChange}>
						<input type='radio' id='false' name='vacc' value='false' />
						<label htmlFor='false'>No</label>
						<br />
						<input type='radio' id='true' name='vacc' value='true' />
						<label htmlFor='true'>Yes</label>
						<br />
					</div>

					<Form.Group controlId='date'>
						<Form.Label>
							When was the date of your last COVID testing?
						</Form.Label>
						<Form.Control
							type='date'
							name='date'
							placeholder='Date of Test'
							onChange={handleChange}
						/>
					</Form.Group>

					<h6>Would you be comfortable doing an in-person volunteer?</h6>
					<div onChange={handleChange}>
						<input type='radio' id='false' name='inperson' value='false' />
						<label htmlFor='false'>No</label>
						<br />
						<input type='radio' id='true' name='inperson' value='true' />
						<label htmlFor='true'>Yes</label>
						<br />
					</div>

          <button className="button" type="submit">
            Submit
          </button>
        </Form>
      </Container>
      <br></br>
      <Footer path="/footer" component={Footer} />
    </div>
  );
}

export default Volunteer;
