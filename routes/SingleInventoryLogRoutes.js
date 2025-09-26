import {Router} from 'express';
import { createSingleInventoryLog, getSingleInventoryLog } from '../controllers/SingleInventoryLogController.js';

const router = Router();

router.post("/", createSingleInventoryLog);
router.get("/", getSingleInventoryLog);

export default router;