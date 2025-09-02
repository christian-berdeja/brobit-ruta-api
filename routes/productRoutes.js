import {Router} from 'express';
import { createProduct, getProducts } from '../controllers/ProductController.js';
// import { validateReservation } from '../middlewares/validateReservation.js';

const router = Router();

router.post("/", createProduct);
router.get("/", getProducts);
// router.delete("/:id", deleteReservation);

export default router;