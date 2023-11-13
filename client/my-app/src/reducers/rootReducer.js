const initialValue = {
    categories: [],
    products: [],
    counter: 0
};

const rootReducer = ((state=initialValue, action) => {
    switch(action.type){
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            };
        case 'SET_PRODUCTS':
            let allProducts = action.payload;
            return {
                ...state,
                products: allProducts,
                counter: allProducts.length
            };
        case 'ADD_PRODUCT':
            let _products = [...state.products];
            _products.push(action.payload);
            return {
                ...state,
                products: _products,
                counter: state.counter + 1
            };
        
        default: return state;
    }
});



export default rootReducer;