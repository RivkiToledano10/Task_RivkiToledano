import axios from 'axios';

const url='http://localhost:5000/categories';

export const getCategories = async()=> {
   return await axios.get(url).then(res => res.data);
}
export const addCategory = async(newCategory)=>{
    return await axios.post(url,newCategory).then(res => res.data);
}

