import React, { useEffect, useState } from "react";
import { Button, Paper, TextField,Container,Grow,Grid, Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../api/categoryService";
import { doAddProduct, doSetCategories, doSetProducts } from "../reducers/action";
import useStyles from '../styles';
import { addProduct, getProducts } from "../api/productService";
import Products from "../components/Products";



const Categories = () => {
    const classes = useStyles();
    const categories = useSelector(state => state.categories);
    const products =useSelector(state=>state.products);
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState('0');
    const [product, setProduct] = useState('');

    useEffect(() => {
        if(!categories.length){
            getCategories().then(data => {
                console.log(data);
                dispatch(doSetCategories(data));
            });
        }
        if(!products.length){
            getProducts().then(data => {
                console.log(data);
                dispatch(doSetProducts(data));
            });
        }
    },[]);

    const handleCategoryChange = (e) =>{
        let category = e.target.value;
        setSelectedCategory(category);
    }

  
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(product != '')
        {
            let category = categories[selectedCategory];
            let newProduct ={
                categoryId: category._id,
                productName: product
            }
            addProduct(newProduct).then(res => {  
                dispatch(doAddProduct(newProduct));
            })    
            setProduct('');
            setSelectedCategory('0');
            alert("המוצר נוסף בצלחה😊")
        }
     };

    return (
        <Container maxWidth="lg">
        <Paper className="classes.paper">
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              
                <Grow in>
                  <Container>
                      <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                      <Grid item xs={10} sm={7}>
                       <FormControl sx={{ m: 1, minWidth: 120 }}>
                       <InputLabel  className={classes.inputLabel} id="demo-simple-select-helper-label">קטגוריה</InputLabel>
                       <Select 
                       className={classes.select}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="קטגוריה" 
                        defaultValue="0" value={selectedCategory} onChange={handleCategoryChange}>
                       {
                        categories.map((category, index) => {
                            return <MenuItem key={index} value={index}>{category.categoryName}</MenuItem >
                        })
                        }
                        </Select>
                        </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.gridAddProduct}>
                            <div>
                            <TextField name="product" variant="outlined" label="מוצר" fullWidth value={product} onChange={(e) => setProduct(e.target.value)} />
                            <br></br>
                            <Button className={classes.buttomSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>הוסף</Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                        <h3 className={classes.h3}>סה"כ: {counter} </h3>
                        </Grid>
                        </Grid>
                  </Container>
                </Grow>
            </form>
            <hr/>
            <Grid container spacing={1} className={classes.grid}>
            {
                categories.map((category, index)=> {
                    let productsByCaregoy = products.filter(product => product.categoryId == category._id);
                    console.log(category);
                    console.log(productsByCaregoy);
                    if(productsByCaregoy.length > 0)   
                        return <Products key={index} categoryName={category.categoryName} productsByCaregoy={productsByCaregoy}/>
                })
            }
            </Grid>
        </Paper>
        </Container>
    );
}

export default Categories;