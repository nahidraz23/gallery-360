import React, { useContext, useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useProducts from '../../hooks/useProducts';
import ProductCard from './ProductCard';
import { initContext } from '../../providers/ContextProvider';

const ProductsPage = () => {
    const axiosPublic = useAxiosPublic();
    const [products, setProducts] = useState([])
    const [searchText, setSearchText] = useState("");
    const [highToLow, setHighToLow] = useState(false);
    const [lowToHigh, setLowToHigh] = useState(false);
    const { loading, setLoading } = useContext(initContext)

    useEffect(() => {
        const getProducts = async () => {
            const res = await axiosPublic.get('/products')
            setProducts(res.data.products)
            setLoading(false)
        }
        getProducts()
    }, [])

    const handleSearch = (e) => {
        const search = e.target.value.toLowerCase();
        setSearchText(search);
    }

    useEffect(() => {
        if (!searchText) return;

        const serachedProduct = async () => {
            const res = await axiosPublic.get(`https://dummyjson.com/products/search?q=${searchText}`)
            setProducts(res.data.products);

        }
        serachedProduct();
    }, [searchText])

    useEffect(() => {
        const sortHighToLow = async () => {
            if (highToLow) {
                const res = await axiosPublic.get(`https://dummyjson.com/products?sortBy=price&order=${highToLow ? 'desc ' : 'asc'}`)
                return setProducts(res.data.products)
            }
            return;
        }

        const sortLowToHigh = async () => {
            if (lowToHigh) {
                const res = await axiosPublic.get(`https://dummyjson.com/products?sortBy=price&order=${lowToHigh ? 'asc ' : 'desc'}`)
                return setProducts(res.data.products)
            }
            return;
        }

        sortHighToLow()
        sortLowToHigh()
    }, [lowToHigh, highToLow])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 container mx-auto my-10 gap-10 p-4 lg:p-0'>
            <div className='lg:col-span-3 space-y-4'>
                <div className='bg-blue-500 py-2 rounded-lg'>
                    <h1 className='text-center text-white font-semibold'>Filter</h1>
                </div>
                <div className=''>
                    <div className='bg-blue-300 py-2 rounded-lg'>
                        <h1 className='text-center text-white font-semibold'>Price</h1>
                    </div>
                    <div className='border-2 rounded-lg'>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text ">High to Low</span>
                                <input type="checkbox" onClick={() => setHighToLow(!highToLow)} className="checkbox" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text ">Low To High</span>
                                <input type="checkbox" onClick={() => setLowToHigh(!lowToHigh)} className="checkbox" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:col-span-9'>
                <div className='md:my-4'>
                    <label className="input input-bordered flex items-center gap-2">
                        <input onChange={handleSearch} type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                {
                    loading ?
                        <div>
                            <progress className="progress w-56"></progress>
                        </div>
                        :
                        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10'>
                            {
                                products.map((product, index) =>
                                    <ProductCard key={index} product={product} />
                                )
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default ProductsPage;