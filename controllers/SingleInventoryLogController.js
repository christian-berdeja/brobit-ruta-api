import * as singleInventoryLogService from "../services/singleInventoryLogService.js"

export const createSingleInventoryLog = async (req, res, next) => {
    try {
        const singleInventoryLog = await  singleInventoryLogService.createSingleInventoryLog(req.body);
        res.status(201).json(singleInventoryLog);
    } catch (error) {
        next(error);
    }
  };

  export const getSingleInventoryLog = async (req, res) => {
    try {
        const singleInventoryLog = await singleInventoryLogService.getAllSingleInventoriesLog();
        res.status(200).json(singleInventoryLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};