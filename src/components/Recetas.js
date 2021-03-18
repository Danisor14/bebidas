import React, {useContext} from 'react';
import {Grid, makeStyles, Card, CardMedia, CardActionArea, CardContent, Typography} from '@material-ui/core';
import {ModalContext} from '../context/ModalContext';
import SpringModal from './SpringModal';


const useStyles = makeStyles(() => ({
    grid: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 10,
        maxWidth: 280,
    },
    text: {
        fontSize: 16,
    }
}));


const Recetas = ({receta}) => {
    const {setIdBebida, recetaInfo, setReceta} = useContext(ModalContext);
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setIdBebida(null);
    };

    return (    
        <Grid 
            item
            xs={9} sm={6} md={4}  
            className={classes.grid}
        >
            <Card>
                <CardActionArea
                    onClick = { () => {
                        setReceta({}) 
                        setIdBebida(receta.idDrink)
                        handleOpen();
                    }}
                >
                    <CardMedia
                        component='img'
                        height='280'
                        image={receta.strDrinkThumb}
                    />
                    <CardContent>
                        <Typography className={classes.text}>{receta.strDrink}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <SpringModal 
                open={open} 
                handleClose={handleClose}
                recetaInfo={recetaInfo}
            />
            
        </Grid>
    );
}
 
export default Recetas;