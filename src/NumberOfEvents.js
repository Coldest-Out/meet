import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
	state = {
		numberOfEvents: 32,
		infoText: ''
	};

	handleInputChanged = (event) => {
		const value = event.target.value;
		if (!isNaN(value) && value >= 1) {
			return this.setState({ numberOfEvents: value });
		} else {
			console.log('Please enter a valid number.');
			return this.state.numberOfEvents;
		}
	};

	render() {
		return (
			<>
				<div className="numberOfEvents">
					<label for="events-number">Number of Events</label>
					<input
						type="text"
						id="events-number"
						value={this.state.numberOfEvents}
						onChange={this.handleInputChanged}
					/>
				</div>
				<ErrorAlert id="errorAlert" text={this.state.infoText} />
			</>
		);
	}
}
export default NumberOfEvents;