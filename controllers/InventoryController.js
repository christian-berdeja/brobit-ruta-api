import * as inventoryService from "../services/inventoryService.js"

export const createInventory = async (req, res, next) => {
    try {
      const inventory = await inventoryService.createInventorie(req.body);
      res.status(201).json(inventory);
    } catch (error) {
      next(error);
    }
  };

  export const getInventories = async (req, res) => {
      try {
        const inventories = await inventoryService.getAllInventory()
        res.status(200).json(inventories);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };