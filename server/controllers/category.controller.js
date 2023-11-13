import category from '../models/category.model.js';

export const getCategories = async(req,res)=>{
    try{
        const categories = await category.find();
        console.log(categories);
        res.status(200).json(categories);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

export const addCategory = async(req,res)=>{
    const _category = req.body;

    const newCategory = new category(_category);
    try{
       await newCategory.save()
       res.status(201).json(newCategory)
    }
    catch(error){
        res.status(409).json({message:error.message});

    }
}