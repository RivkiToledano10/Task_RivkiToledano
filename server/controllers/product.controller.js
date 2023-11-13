import product from '../models/product.model.js';

export const getProducts = async(req,res)=>{
    try{
        const products = await product.find();
        console.log(products);
        res.status(200).json(products);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

export const addProduct = async(req,res)=>{
    const _product = req.body;

    const newProduct = new product(_product);
    try{
       await newProduct.save()
       res.status(201).json(newProduct)
    }
    catch(error){
        res.status(409).json({message:error.message});

    }
}