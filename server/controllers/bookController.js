import models from "../models/bookModel.js";

export const bookController = {
	getAll: async (_, res) => {
		const rows = await models.getAll();
		console.log(rows);

		return res.header("Access-Control-Allow-Origin",).status(200).json({
			data: rows,
		});
	},

	getOne: async ({params}, res) => {
		const rows = await models.getOne(params.id);
		return res.status(200).json({
			rows,
		});
	},

	createNewBook: async (req, res) => {
		console.log(req.body.book_title);
		const {book_title, book_description, book_cover} = req.body;
		const result = await models.createNewBook(
			book_title,
			book_description,
			book_cover
		);
		console.log(result);
		res.status(201).json({
			message: "Data was sent sucessfuly!",
		});
	},
	editBook: async (req, res) => {
		let {book_id, book_title, book_description, book_cover} = req.body;

		const result = await models.editBook(
			book_id,
			book_title,
			book_description,
			book_cover
		);

		res.status(201).json({message: "Data => was successfully updated!"});
	},

	deleteOneBook: async (req, res) => {
		const {id} = req.params;
		console.log(id);
		const result = await models.deleteOneBook(id);
		res.status(204).json({
			message: "Book was deleted successfully!",
		});
	},
};
