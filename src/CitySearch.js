import React, { Component } from 'react';

class CitySearch extends Component {
	state = {
		query: '',
		suggestions: []
	}

	//Delete this handle function once I get failed test working.
	handleInputChanged = (event) => {
		const value = event.target.value;
		this.setState({ query: value });
	}


	//Getting failed test <CitySearch /> Change state when text input changes.
	//Type Error: Cannot read properties of undefined (reading 'filter')
	/*
		handleInputChanged = (event) => {
			const value = event.target.value;
			const suggestions = this.props.locations.filter((location) => {
				return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
			});
			this.setState({
				query: value,
				suggestions,
			});
		};
	*/


	render() {
		return (
			<div className="CitySearch">
				<input
					type="text"
					className="city"
					value={this.state.query}
					onChange={this.handleInputChanged}
				/>
				<ul className="suggestions">
					{this.state.suggestions.map((suggestion) => (
						<li
							key={suggestion}
						//onClick={() => this.handleItemClicked(suggestion)}
						>{suggestion}</li>
					))}
					<li>
						<b>See all cities</b>
					</li>
				</ul>

			</div>
		);
	}
}

export default CitySearch;