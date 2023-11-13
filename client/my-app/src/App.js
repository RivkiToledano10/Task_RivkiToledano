import React from "react";
import Categories from "./components/Categories";
import { AppBar,Typography } from "@material-ui/core";
import useStyles from './styles';
import ShoppingCart from '../src/Images/ShoppingCart.png';


const App=()=>{
  const classes=useStyles();
    return(
          <div className={classes.app}>
                 <AppBar className={classes.appBar} position="static" color="inherit">
                 <Typography className={classes.heading} variant="h2" align="center">רשימת קניות</Typography>
                 <img  src={ShoppingCart} alt="memories" height="60"></img> 
                 </AppBar>
                 <Categories />
          </div>  
    );
}

export default App;
