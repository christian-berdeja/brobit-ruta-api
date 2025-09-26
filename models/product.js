import mongoose from "mongoose";

const product = new mongoose.Schema({
    nombreProducto: String,
    codigoFabrica: String,
    description: String,
    marca: String,
    categoria: String,
    // noPiezas: Number,
    // variable con modelo de datos piezasDeProducto
})

export default mongoose.model("Product", product);