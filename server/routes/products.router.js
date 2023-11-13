import  express  from "express";
import {getProducts, addProduct} from '../controllers/product.controller.js';

const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.post('/', addProduct);

export default productRouter;