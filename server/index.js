import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import postRouts from './routes/posts.js';
import categoryRouter from './routes/category.router.js';
import productRouter from './routes/products.router.js';

const app=express();



app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/categories',categoryRouter);
app.use('/products', productRouter);
// app.use('/posts',postRouts);

const CONECTION_URL='mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.fjzxngy.mongodb.net/';
const PORT=process.env.PORT || 5000;

mongoose.connect(CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify',false);