import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { Component } from 'react';
import Event from './Event.js';

class EventList extends Component {
	render() {
		const { events } = this.props;
		return (
			<ul className="EventList">
				{events.map(event =>
					<li key={event}>
						<Event event={event} />
					</li>
				)}
			</ul>
		);
	}
}

export default EventList;