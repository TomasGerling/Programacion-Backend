import dotenv from 'dotenv';
dotenv.config();
// import mongoose from 'mongoose';
import productService from './src/daos/index.js';
productService();
// import {productsModel }from './src/models/product.model.js';

// const CRUD = async () => {
//     try {
//         const URL = "mongodb://localhost:27017/ecommerce";
//         await mongoose.connect(URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.info('Mongoose connected');

//         const productMock = {
//             name: "Mesa Cuadrada",
//             percio: 1413,
//             stock: 123

//         }
//         const newProduct = new productsModel(productMock);
//         const product= await newProduct.save();
//         console.log(product);
//     } catch (error) {
//         throw new Error(err);
//     }
// }
// CRUD();