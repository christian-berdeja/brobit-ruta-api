import Product from "../models/product.js";

export const createProduct = async (productData) => {
  try {
    // const existingReservation = await Reservation.findOne({ 
    //   numeroSlot: reservationData.numeroSlot 
    // });

    // if (existingReservation) {
    //   throw new Error(`El slot ${reservationData.numeroSlot} ya está ocupado`);
    // }

    const product = new Product(productData);

    return await product.save();
    
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};

export const getAllProducts = async (req, res) => {
    try {
        var products = await Product.find();

        return products;
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        throw error;
    }
}