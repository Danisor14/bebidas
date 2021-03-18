import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    const [idBebida, setIdBebida] = useState(null);
    const [recetaInfo, setReceta] = useState({});

    useEffect(() => {
        const getReceta = async () => {
            if(!idBebida) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idBebida}`
            const response = await axios.get(url);
            setReceta(response.data.drinks[0]);
            
        }

        getReceta();
    }, [idBebida])
    

    return (  
        <ModalContext.Provider
            value={{
                setIdBebida,
                recetaInfo,
                setReceta,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;