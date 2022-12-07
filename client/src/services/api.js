"use strict";

import api_config from "../api/api_config";

const method = {
	getAllBooks: async (_) => {
		const dataFetched = await fetch(api_config.MOCK_URL, {
			method: "GET",
		});

		const {rows} =
			dataFetched.ok === false
				? "Error fetching data for server" + dataFetched.status
				: await dataFetched.json();

		return await rows;
	},

	getBooksById: async (id) => {
		const dataFetched = await fetch(api_config.SERVER_URL + `/${id}`, {
			method: "GET",
		});

		const {rows} =
			dataFetched.ok === false
				? "Error fetching data for server" + dataFetched.status
				: await dataFetched.json();

		return await rows;
	},
};

export default method;
