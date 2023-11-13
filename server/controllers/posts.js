// import Category from '../models/category.model.js';

// export const getPosts=async(req,res)=>{
//     try{
//         const postMessage=await Category.find();
//         console.log(postMessage);
//         res.status(200).json(postMessage);
//     }
//     catch(error){
//         res.status(404).json({message:error.message});
//     }
// }

// export const creatPost=async(req,res)=>{
//     const post=req.body;

//     const newPost=new Category(post);
//     try{
//        await newPost.save()
//        res.status(201).json(newPost)
//     }
//     catch(error){
//         res.status(409).json({message:error.message});

//     }
// }