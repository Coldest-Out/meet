import React, { Component } from 'react';

class CitySearch extends Component {
	state = {
		query: '',
		suggestions: []
	}

	//Getting failed test <CitySearch /> Change state when text input changes.
	//Type Error: Cannot read properties of undefined (reading 'filter')
	//Corrected error by adding `locations={locations}` to the CitySearchWrapper = shallow(<CitySearch locations={locations} />);

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


	//Scenario 3
	handleItemClicked = (suggestion) => {
		this.setState({
			query: suggestion
		});

		this.props.updateEvents(suggestion);
	}

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
							//Scenario 3	
							onClick={() => this.handleItemClicked(suggestion)}
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