import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            className="hero h-[863px] lg:h-[929px]"
            style={{
                backgroundImage: "url(https://cdn.vectorstock.com/i/500p/91/98/shopping-online-with-discount-conceptual-banner-vector-47519198.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Welcome To Gallery360</h1>
                    <p className="mb-5">
                        Discover the Art of Shopping at Gallery360 – Your One-Stop Online Destination for Premium Products, Unbeatable Deals, and Seamless Experiences!
                    </p>
                    <Link to={'/products'}>
                        <button className="btn btn-primary">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;