import mongoose from "mongoose";

const singleInventoryLog = new mongoose.Schema({
    // validar que el id de la tienda sea unico
    storeId: String,
    codigoFabrica: String,
    uniqueCodeProduct: String,
    status: String,
    noPiezas: Number,
    // variable con modelo de datos piezasDeProducto
    registratiosDate: { type: Date, default: Date.now }
})

export default mongoose.model("SingleInventoryLog", singleInventoryLog);