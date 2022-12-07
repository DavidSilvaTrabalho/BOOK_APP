import dbConnection from "./db.js";

const models = {
	getAll: async (_) => {
		try {
			const books = await dbConnection.pool.query(
				"SELECT * FROM books_api.books"
			);
			return books;
		} catch (error) {
			console.error(`There was an error fetching books : ${error}`);
		}
	},

	getOne: async (id) => {
		try {
			const oneBook = await dbConnection.pool.query(
				"SELECT * FROM books_api.books WHERE book_id = ?",
				[id]
			);
			return oneBook;
		} catch (error) {
			console.error(`There was an error fetching books : ${error}`);
		}
	},

	createNewBook: async (title, description, cover) => {
		try {
			const result = await dbConnection.pool.query(
				"INSERT INTO books_api.books (book_title, book_description, book_cover_url) VALUES (?, ?, ?)",
				[title, description, cover]
			);
			return result;
		} catch (error) {
			console.error(`There was an error sending books : ${error}`);
		}
	},
	editBook: async (book_id, book_title, book_description, book_cover) => {
		console.log(book_id, book_title, book_description, book_cover);

		try {
			const result = await dbConnection.pool.query(
				"UPDATE books_api.books SET book_title = ?, book_description = ?, book_cover_url = ? WHERE book_id = ?",
				[book_title, book_description, book_cover, book_id]
			);
			return result;
		} catch (error) {
			console.error(`There was an error updating books : ${error}`);
		}
	},

	deleteOneBook: async (id) => {
		try {
			const result = await dbConnection.pool.query(
				"DELETE FROM books_api.books WHERE book_id = ?",
				[id]
			);
			return result;
		} catch (error) {
			console.error(`There was an error deleting books : ${error}`);
		}
	},
};

export default Object.freeze(models);
