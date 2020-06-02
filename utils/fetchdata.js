var fetch = require("node-fetch");

const getDataFromAPI = async () => {
	let response = await fetch("https://api.covid19india.org/data.json");
	return await response.json();
};

export const getIndiaData = async () => {
	let data = await getDataFromAPI();
	return data.statewise[0];
};
