import SingleInventory from "../models/singleInventory.js"

export const createSingleInventory = async (singleInventoryData) => {
  try {

    if (Array.isArray(singleInventoryData)) {
        return await SingleInventory.insertMany(singleInventoryData);
    }

    const singleInventory = new SingleInventory(singleInventoryData);

    return await singleInventory.save();
    
  } catch (error) {
    console.error("Error al crear inventario unico:", error);
    throw error;
  }
};

export const getAllSingleInventories = async (req, res) => {
    try {
        var singleInventory = await SingleInventory.find();

        return singleInventory;
    } catch (error) {
        console.error("Error al obtener los inventarios únicos:", error);
        throw error;
    }
}