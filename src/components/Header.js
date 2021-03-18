import React from 'react';
import {AppBar, Typography, makeStyles, Toolbar} from '@material-ui/core';


const useStyles = makeStyles( (theme) => ({
    header: {  
        height: 250,
        width: '100%',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: theme.palette.secondary.main,
        
    },
    text :{
        fontFamily: 'Lobster' ,
        textAlign: 'center'
    }
}));


const Header = () => {
    const classes = useStyles();
    return ( 
        <AppBar position={'static'} className={classes.header}>
            <Toolbar id="back-to-top-anchor">
                <Typography className={classes.text} variant='h3' color='inherit'>Busca Recetas de Bebidas</Typography>
            </Toolbar>
        </AppBar>
    );
}
 
export default Header;