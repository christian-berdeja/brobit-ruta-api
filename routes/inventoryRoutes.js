import {Router} from 'express';
import { createInventory, getInventories } from '../controllers/InventoryController.js';

const router = Router();

router.post("/", createInventory);
router.get("/", getInventories);

export default router;