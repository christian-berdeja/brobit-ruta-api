import * as saleService from "../services/saleService.js"

export const createSale = async (req, res, next) => {
    try {
      const sale = await  saleService.createSale(req.body);
      res.status(201).json(sale);
    } catch (error) {
      next(error);
    }
  };

  export const getSales = async (req, res) => {
      try {
        const sales = await saleService.getAllSales();
        res.status(200).json(sales);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };