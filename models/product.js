import mongoose from "mongoose";

const product = new mongoose.Schema({
    nombreProducto: String,
    codigoFabrica: String,
    // codigoUnico: String,
    description: String,
    marca: String,
    categoria: String,
    noPiezas: Number
})

export default mongoose.model("Product", product);