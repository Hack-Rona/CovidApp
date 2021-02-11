import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Volunteer from './Volunteer';
import Senior from './Senior';
import SeniorConfirmation from './SeniorConfirmation';
import VolunteerConfirmation from './VolunteerConfirmation';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={Home} />
			<Route exact path='/volunteer' component={Volunteer} />
			<Route exact path='/senior' component={Senior} />
			<Route
				exact
				path='/volunteerconfirmation'
				component={VolunteerConfirmation}
			/>
			<Route exact path='/seniorconfirmation' component={SeniorConfirmation} />
		</div>
	);
}

export default App;
