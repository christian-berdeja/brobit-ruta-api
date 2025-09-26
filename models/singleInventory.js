import mongoose from "mongoose";

const singleInventory = new mongoose.Schema({
    storeId: String,
    codigoFabrica: String,
    uniqueCodeProduct: String,
    status: String,
    noPiezas: Number,
    // variable con modelo de datos piezasDeProducto
    registratiosDate: { type: Date, default: Date.now }
})

export default mongoose.model("SingleInventory", singleInventory);