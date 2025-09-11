import Sale from "../models/sale.js";

export const createSale = async (saletData) => {
  try {
    const sales = new Sale(saletData);

    return await sales.save();
    
  } catch (error) {
    console.error("Error al crear la venta:", error);
    throw error;
  }
};

export const getAllSales = async (req, res) => {
    try {
        var sales = await Sale.find();

        return sales;
    } catch (error) {
        console.error("Error al obtener las ventas:", error);
        throw error;
    }
}