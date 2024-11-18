import React from "react";
import Button from "../../components/shared/Button";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { id, title, description, thumbnail, price, brand, images } = product;
    return (
        <div className="p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={images[0]} alt="" className="object-center w-full rounded-md md:h-80 dark:bg-gray-500" />
            <div >
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{brand}</span>
                </div>
                <div className="flex items-center justify-between my-4">
                    <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                    <h2 className="text-xl font-bold">${price}</h2>
                </div>
            </div>
            <p className="dark:text-gray-800">{description}</p>
            <div className="text-center">
                <Link to={`/productdetails/${id}`}>
                    <Button text={"View Details"} />
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
