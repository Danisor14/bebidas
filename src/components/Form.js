import React, {useContext, useState} from 'react';
import {Grid, makeStyles, Select, MenuItem, InputLabel, FormControl, Typography, Divider, IconButton, InputBase, Paper} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import {CategoriasContext} from '../context/CategoriaContext';
import {BusquedaContext} from '../context/BusquedaContext';


const useStyles = makeStyles(() => ({
    selectForm: {
        minWidth: 200
    },
    formText: {
        textAlign: 'center',
        color: '#4c4b4b',
        marginBottom: 30
    },
    grid: {
        marginBottom: 20
    },
    divider: {
        width: '85%',
        margin: '0 auto',
        marginBottom: 20
    },
    searchPaper:{
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        minWidth: 300,
    },
    searchDivider: {
        height: 28,
        margin: 4,
    },
    inputBase: {
        flexGrow: 1,
        paddingLeft: 10
    }
}));

const Form = () => {
    const classes = useStyles();
    const {categorias} = useContext(CategoriasContext); 
    const {setBusqueda, setConsultar, setSearchBar} = useContext(BusquedaContext);
    const [searchData, setSearchData] = useState('');

    return (  
        <Grid 
        container  
        direction='column'
        >
            <Grid item>
                <Typography className={classes.formText} variant='h6'>Busca bebidas por nombre o categorias</Typography>
            </Grid>

            <Grid 
                className={classes.grid}  
                container   
                justify='center'
                alignItems='center'
            >   
                <Grid className={classes.grid} item container xs={12} sm={7} md={4} justify='center' >
                    <Paper className={classes.searchPaper}>
                        <InputBase 
                            placeholder='Busca bebidas' 
                            className={classes.inputBase}
                            onChange={(e) => {
                                setSearchData(e.target.value)
                            }} 
                        />
                        <Divider 
                            orientation='vertical' 
                            className={classes.searchDivider}
                        />
                        <IconButton 
                            type='submit'
                            onClick={ (e) => { 
                                e.preventDefault(); 
                                setConsultar(true);
                                setSearchBar(searchData);
                                
                            }}
                        >
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item container className={classes.grid} xs={12} sm={5} md={4} justify='center'>
                    <FormControl variant='outlined' className={classes.selectForm}>
                        <InputLabel id='select' color='secondary' >Categoria</InputLabel>
                        <Select
                            labelId='select'
                            label='Categoria'
                            color='secondary'
                            onChange={(e) => {
                                setBusqueda(e.target.value);
                                setConsultar(true);
                            }}
                        >
                            {categorias.map(item => (
                                <MenuItem 
                                    value = {item.strCategory}
                                    key = {item.strCategory}
                                >
                                    {item.strCategory}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            
            <Divider className={classes.divider} /> 
        </Grid>     
    );
}
 
export default Form;