import React, { createContext, useState } from 'react';

export const initContext = createContext(null); 

const ContextProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    // const [products, setProducts] = useState([]);

    // const products = useProducts();

    const contextData = {
        loading,
        setLoading
    }

    return (
        <initContext.Provider value={contextData}>
            {children}
        </initContext.Provider >
    );
};

export default ContextProvider;