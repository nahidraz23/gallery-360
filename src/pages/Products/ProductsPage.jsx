import React, { useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useProducts from '../../hooks/useProducts';
import ProductCard from './ProductCard';

const ProductsPage = () => {
    const products = useProducts();
    const [highToLow, setHighToLow] = useState(false); 
    console.log(highToLow)

    return (
        <div className='grid grid-cols-12 container mx-auto my-10 gap-10'>
            <div className='col-span-3 space-y-4'>
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
                    </div>
                </div>
            </div>
            <div className='col-span-9'>
                <div className='container mx-auto grid grid-cols-3 gap-10'>
                    {
                        products.map((product, index) =>
                            <ProductCard key={index} product={product} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;