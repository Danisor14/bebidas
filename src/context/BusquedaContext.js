import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const BusquedaContext = createContext();


const BusquedaProvider = (props) => {

    const [recetas, setRecetas] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [consultar, setConsultar] = useState(false);
    const [searchBar, setSearchBar] = useState('');

    useEffect(() => {
        if (consultar){
            const getRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchBar}`

                const response = await axios.get(url);
                setRecetas(response.data.drinks);  
            }
            getRecetas();
        }
    }, [searchBar])

    useEffect(() => {
        if (consultar){
            const getRecetas = async () => {
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${busqueda}`

                    const response = await axios.get(url);
                    setRecetas(response.data.drinks);  
            }
            getRecetas();
        }
    }, [busqueda])  

    return (
        <BusquedaContext.Provider
            value={{
                recetas,
                setBusqueda,
                setConsultar,
                setSearchBar
            }}
        >
            {props.children}
        </BusquedaContext.Provider>
    )
}

export default BusquedaProvider;
