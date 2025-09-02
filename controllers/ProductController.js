import * as productService from '../services/ProductService.js';

export const createProduct = async (req, res, next) => {
    try {
      const product = await  productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  };

  export const getProducts = async (req, res) => {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };