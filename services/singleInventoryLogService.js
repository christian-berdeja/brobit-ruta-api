import SingleInventoryLog from "../models/singleInventoryLog.js"

export const createSingleInventoryLog = async (singleInventoryLogData) => {
  try {
    // agrega varios registros de inventario
    if (Array.isArray(singleInventoryLogData)) {
        return await SingleInventoryLog.insertMany(singleInventoryLogData);
    }
    const singleInventoryLog = new SingleInventoryLog(singleInventoryLogData);

    return await singleInventoryLog.save();
    
  } catch (error) {
    console.error("Error al crear log de inventario unico:", error);
    throw error;
  }
};

export const getAllSingleInventoriesLog = async (req, res) => {
    try {
        var singleInventoryLog = await SingleInventoryLog.find();

        return singleInventoryLog;
    } catch (error) {
        console.error("Error al obtener los log de inventarios únicos:", error);
        throw error;
    }
}