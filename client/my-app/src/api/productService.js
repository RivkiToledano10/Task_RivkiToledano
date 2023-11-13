import axios from 'axios';

const url='http://localhost:5000/products';

export const getProducts = async()=> {
   return await axios.get(url).then(res => res.data);
}
export const addProduct = async(newProduct)=>{
    return await axios.post(url,newProduct).then(res => res);
}

