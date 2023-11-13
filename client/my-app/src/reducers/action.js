export const doSetCategories = (categories) =>{
    return{
        type: 'SET_CATEGORIES',
        payload: categories
    };
}
export const doSetProducts = (products) =>{
    return{
        type: 'SET_PRODUCTS',
        payload: products
    };
}

export const doAddProduct = (newProduct) =>{
    return{
        type: 'ADD_PRODUCT',
        payload: newProduct
    };
}