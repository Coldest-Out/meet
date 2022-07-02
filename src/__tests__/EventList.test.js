import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data'


describe('<EventList /> component', () => {

	test('render correct number of events', () => {
		const EventListWrapper = shallow(<EventList events={mockData} />);
		expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
	});


	/*
		test('render correct numver of events', () => {
			const EventListWrapper = shallow(<EventList events={mockData} />);
			if (undefined !== mockData && mockData.length) {
				return "mockData has an undefined length, this will be returned."
			} else {
				return expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
			}
		});
	*/
});