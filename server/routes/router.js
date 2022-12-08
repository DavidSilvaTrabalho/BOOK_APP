import {Router} from "express";
import {bookController} from "../controllers/bookController.js";
const router = Router();

router.get("/api-v1", async (req, res) => {
	res.json({
		message: "Wellcome to Book API.v1!",
	});
});

router.get("/api-v1/books", bookController.getAll);
router.get("/api-v1/books/:id", bookController.getOne);
router.post("/api-v1/books", bookController.createNewBook);
router.put("/api-v1/books", bookController.editBook);
router.delete("/api-v1/books/:id", bookController.deleteOneBook);

export default router;
