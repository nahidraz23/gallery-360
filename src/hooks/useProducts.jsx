import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useProducts = () => {

    const [products, setProducts] = useState([])
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const getProducts = async () => {
            const res = await axiosPublic.get('/products')
            return setProducts(res.data.products)
        }

        getProducts()

    }, [])

    return products;

};

export default useProducts;