import { mockData } from "./mock-data";

/**
 * @param {*} events:
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */


const getEvents = async () => {
	return mockData;
};

const extractLocations = (events) => {
	var extractLocations = events.map((event) => event.location);
	var locations = [...new Set(extractLocations)];
	return locations;
};

export { getEvents, extractLocations };