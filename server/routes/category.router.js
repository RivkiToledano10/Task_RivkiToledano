import  express  from "express";
import {getCategories, addCategory} from '../controllers/category.controller.js';

const categoryRouter = express.Router();

categoryRouter.get('/', getCategories);
categoryRouter.post('/', addCategory);

export default categoryRouter;