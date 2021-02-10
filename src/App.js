import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Volunteer from './Volunteer'
import './App.css';

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={Home} />
			<Route exact path='/volunteer' component={Volunteer} />
		</div>
	);
}

export default App;
