import React, {useContext} from 'react';
import {Grid, makeStyles, Typography} from '@material-ui/core';
import {BusquedaContext} from '../context/BusquedaContext';
import Recetas from './Recetas';


const useStyles = makeStyles(() => ({
    grid: {
        margin: 'auto'
    }
}));

const ListRecetas = () => {
    const classes = useStyles();
    const {recetas} = useContext(BusquedaContext);

    return (  
        <Grid 
            className={classes.grid}
            container item
            xs={12} 
            justify='center'
            alignItems='center'
            spacing={2}
            direction='row'
        >   
            {recetas ?(
                recetas.map(receta => (
                    <Recetas 
                        key={receta.idDrink}
                        receta={receta} 
                    />
                ))
            ):(
                <img src='no-result-found.png'/>
            )}
        
        </Grid>
    );
}
 
export default ListRecetas;