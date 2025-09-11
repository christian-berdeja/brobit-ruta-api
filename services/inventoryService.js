import Inventory from "../models/inventory.js";

export const createInventorie = async (inventoryData) => {
  try {

    // agrega varios registros de inventario
    if (Array.isArray(inventoryData)) {
      return await Inventory.insertMany(inventoryData);
    }

    const invntories = new Inventory(inventoryData);

    return await invntories.save();
    
  } catch (error) {
    console.error("Error al agregar inventario:", error);
    throw error;
  }
};

export const getAllInventory = async (req, res) => {
    try {
        var sales = await Inventory.find().sort({ idStore: 1 });

        return sales;
    } catch (error) {
        console.error("Error al obtener las ventas:", error);
        throw error;
    }
}