import React from 'react';
import Navigation from '../Components/Navigation';
import { Navigate } from 'react-router-dom';

export default class Page1 extends React.Component {

	state = {end: false};

	// fonction appelée depuis le bouton
	// fonction fléchée pour éviter autobinding
	suite = () => {
		this.setState({end: true});
	}

	render() {
		if(this.state.end === true) {
			return <Navigate to="/p2" />
		}
		return (
			<div className="App">
				<Navigation />
				<h1>Page 1</h1>
				<p>lorem ipsum ...</p>
				<button onClick={ this.suite }>La suite...</button>
			</div>
			
		)
	}
}