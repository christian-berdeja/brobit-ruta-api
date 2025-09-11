import Store from "../models/store.js";

export const createStore = async (storetData) => {
  try {
    const store = new Store(storetData);

    return await store.save();
    
  } catch (error) {
    console.error("Error al crear la venta:", error);
    throw error;
  }
};

export const getAllStores = async (req, res) => {
    try {
        var stores = await Store.find();

        return stores;
    } catch (error) {
        console.error("Error al obtener las ventas:", error);
        throw error;
    }
}