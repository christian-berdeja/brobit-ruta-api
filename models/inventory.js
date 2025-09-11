import mongoose from "mongoose";

const inventory = new mongoose.Schema({
    idStore: String,
    idProduct: String,
    productCode: String,
    price: Number,
    cost: Number,
    stock: Number,
    minStock: Number,
    maxStock: Number,
    isActive: Boolean
})

export default mongoose.model("Inventory", inventory);