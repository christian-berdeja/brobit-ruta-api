import {Router} from 'express';
import { createSingleInventory, getSingleInventory } from '../controllers/SingleInventoryController.js';

const router = Router();

router.post("/", createSingleInventory);
router.get("/", getSingleInventory);

export default router;