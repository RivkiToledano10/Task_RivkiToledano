import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>({
    app: {
        direction: 'rtl'
    },
    appBar:{
        borderRadius:15,
        margin:'30px 0',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    heading:{
        color:'rgba(0,183,255,1)'
    },
    root:{
        '.MuiTextFiled-root':{
          margin:theme.spacing(1),
        }
      },
      paper:{
          padding:theme.spacing(2),
      },
      form:{
          display:'flex',
          flexWrap:'wrap',
          justifyContent:'center'
      },
      fileInput:{
         width:'97%',
         margin:'10px 0'
  
      },
      buttomSubmit:{
       marginTop:'1.5vw',
       marginBottom:10,
       background:"rgba(0,183,255,1)",
       color:"white",
       fontSize: "15px"
      },
      mainContainer:{
        display:'flex',
        alignItems:'center',
    },
    smMargin:{
        margin:theme.spacing(1),
    },
    actionDiv:{
        textAlign:'center'
    },
    h3:{
        color:"rgba(0,183,255,1)", 
    },
    grid:{

        color:"gray",
        marginRight:"9px"
    },
    select:{
        color:"gray",
         marginTop:"6vw !important"
    },
    inputLabel:{
        fontSize:"25px",
        color:"gray",
        marginTop:"2.5vw"
    },
    gridAddProduct:{
        marginTop:"3vw"
 
    }


}));