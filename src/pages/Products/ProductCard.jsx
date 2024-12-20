import React from "react";
import Button from "../../components/shared/Button";
import { Link } from "react-router-dom";
import { FaDollarSign, FaEye } from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ product }) => {

    const { id, images, title, description, price, rating, thumbnail } = product;

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (
        <div className="card bg-base-100 max-w-96 shadow-lg hover:shadow-slate-300">
            <figure>
                <img
                    src={images[0]}
                    alt="Shoes"
                    className='h-64'
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <h1>{title}</h1>
                </h2>
                <p>{description}</p>
                <div className='flex items-center'>
                    <p className='text-xl font-medium flex items-center'><FaDollarSign className='text-green-600'></FaDollarSign>{price}</p>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="orange"
                        edit={false}
                        half={true}
                        value={rating}
                    />
                </div>
                <Link to={`/productdetails/${id}`}><button className='btn btn-outline w-full hover:bg-blue-600 hover:border-none'><FaEye></FaEye> View Details</button></Link>
            </div>
        </div>
    );
};

export default ProductCard;
