import mongoose from "mongoose";

const store = new mongoose.Schema({
    // validar que el id de la tienda sea unico
    storeId: String,
    name: String,
    personContact: String,
    phoneContact: Number,
    address: String,
    municipality: String,
    state: String,
    zipCode: Number,
    coordinates: String,
    registratiosDate: { type: Date, default: Date.now }
})

export default mongoose.model("Store", store);