import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/router.js";

dotenv.config();
const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
	})
);
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 4020, () =>
	console.log("Server is listening on port " + process.env.PORT || 4020)
);
