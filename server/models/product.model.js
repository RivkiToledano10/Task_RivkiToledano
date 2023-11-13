import mongoose from "mongoose";

const ProductSchema=mongoose.Schema({
    productName: {
        type: String,
        require: true
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
         ref: 'categories'
    }
})

const product = mongoose.model('products',ProductSchema);
export default product;