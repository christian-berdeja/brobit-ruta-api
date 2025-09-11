import * as storeService from "../services/storeService.js"

export const createStore = async (req, res, next) => {
    try {
      const store = await storeService.createStore(req.body);
      res.status(201).json(store);
    } catch (error) {
      next(error);
    }
  };

  export const getStores = async (req, res) => {
      try {
        const stores = await storeService.getAllStores();
        res.status(200).json(stores);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };