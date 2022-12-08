"use strict";
import axios from "axios";
import api_config from "../api/api_config";
import mockdata from "./../../mocks/db.json";

const method = {
	getAllBooks: async (_) => {
		try {
			const {data} = await axios.get("http://localhost:4020/api-v1/books");
			const dataFrom = await data.data;
			return dataFrom;
		} catch (error) {
			console.error(error);
		}
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
