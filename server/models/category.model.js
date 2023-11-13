import mongoose from "mongoose";

const CategorySchema=mongoose.Schema({
    categoryName: {type: String, require: true},
})

const category = mongoose.model('categories',CategorySchema);
export default category;