import { Grid } from '@material-ui/core';
import React from 'react';
import useStyles from '../styles';

const Products = ({categoryName, productsByCaregoy}) => {
  const classes = useStyles();

  let listItems = {};
  let arrItems = [];
  productsByCaregoy.forEach((product, index) => {
    if(listItems[product.productName]){
        listItems[product.productName]+=1;
    }
    else{
        listItems[product.productName] = 1;
    }
  });

  for(let item in listItems) {
    arrItems.push({value: item, count: listItems[item]});
  }
  

  return (
    <Grid item xs={15} sm={15} className={classes.grid}>
    <div styles={{margin: '25px'}}>
    <h3>{categoryName} - {productsByCaregoy.length} מוצרים</h3>
    <ul>    
        {arrItems.map((item, index) =>
        <li key={index}>{item.value}{item.count > 1? ` - ${item.count}`: null}</li>
        )}
    </ul>
    </div>
    </Grid>
  );
  }

  export default Products;