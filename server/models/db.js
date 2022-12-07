import mariadb from "mariadb";
import dotenv from "dotenv";
dotenv.config();

try {
	var pool = mariadb.createPool({
		host: process.env.HOST,
		port: process.env.PORT_DATAB,
		user: "root",
		password: process.env.PASSWORD,
		database: process.env.DATABASE,
	});
} catch (error) {
	console.error("error: " + error);
}

export default Object.freeze({
	pool,
});
