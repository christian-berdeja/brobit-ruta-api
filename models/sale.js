import mongoose from "mongoose";

const sale = new mongoose.Schema({
    saleId: String,
    storeId: String,
    codigoFabrica: String,
    quantity: Number,
    saleDate: { type: Date, default: Date.now }
})

export default mongoose.model("Sale", sale);