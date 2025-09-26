import * as singleInventoryService from "../services/singleInventoryService.js"

export const createSingleInventory = async (req, res, next) => {
    try {
        const singleInventory = await  singleInventoryService.createSingleInventory(req.body);
        res.status(201).json(singleInventory);
    } catch (error) {
        next(error);
    }
  };

  export const getSingleInventory = async (req, res) => {
    try {
        const singleInventory = await singleInventoryService.getAllSingleInventories();
        res.status(200).json(singleInventory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};