import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import { Server } from "socket.io";
import http from "http";

// routes
import productRoutes from "./routes/productRoutes.js";
import saleRoutes from "./routes/saleRoutes.js";
import storeRoutes from "./routes/storeRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import singleInventoryRoutes from "./routes/singleInventoryRoutes.js";
import singleInventoryLogRoutes from "./routes/SingleInventoryLogRoutes.js";

dotenv.config();
const app = new express();
const PORT = process.env.PORT || 8080; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

var server = http.createServer(app);

// var io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "PUT", "POST", "DELETE"]
//   }
// });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Se conecto correctamente a la bd BrobitApp"))
  .catch((e) => console.log("Error", e));

// use-routers
  app.use('/api/product',productRoutes);
  app.use('/api/sale',saleRoutes);
  app.use('/api/store',storeRoutes);
  app.use('/api/inventory',inventoryRoutes);
  app.use('/api/singleInventory', singleInventoryRoutes);
  app.use('/api/singleInventoryLog', singleInventoryLogRoutes);

server.listen(PORT, ()=> {
  console.log(
    `El servidor se encuentra activo en el puerto ${PORT} Api BrobitApp`
  );
})