/* eslint-disable no-console */

// custom logger - used to show how sharable utils can be code split
export default ({ label, message }) => {
	console.log(`app log ${message}. by ${(label) ? label : ""}`);
};
