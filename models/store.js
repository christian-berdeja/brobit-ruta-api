import mongoose from "mongoose";

const store = new mongoose.Schema({
    idStore: String,
    name: String,
    personContact: String,
    phoneContact: Number,
    address: String,
    municipality: String,
    state: String,
    zipCode: String,
    coordinates: String,
    registratiosDate: { type: Date, default: Date.now }
})

export default mongoose.model("Store", store);