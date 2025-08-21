import React, { useRef, useEffect, useState } from 'react';
import { Carousel } from "react-bootstrap";
import img2 from '../assets/banner/bannerImage2.jpg';
import img3 from '../assets/banner/bannerImage3.jpg';
import img4 from '../assets/banner/bannerImage4.jpg';
import img5 from '../assets/banner/bannerImage5.jpg';

import Categories from '../components/home/Categories';
import { NavLink } from 'react-router-dom';

export default function Home() {
    const sliderRef = useRef(null);
    const [productsData, setProductsData] = useState([]);

    // Scroll buttons
    const scroll = (direction) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    // Fetch products (skip 7, take 20)
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=20&skip=7')
            .then(res => res.json())
            .then(data => {
                setProductsData(data.products);
            })
            .catch(err => console.error("Error fetching products:", err));
    }, []);

    return (
        <div>
            {/* Slider */}
            <div>
                <Carousel data-bs-theme="dark" indicators={false}>
                    <Carousel.Item className='slider'>
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item className='slider'>
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item className='slider'>
                        <img className="d-block w-100" src={img4} alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item className='slider'>
                        <img className="d-block w-100" src={img5} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* Category */}
            <Categories />

            {/* Best Sellers */}
            <div className="position-relative p-4 container mb-5 mt-2 bg-white">
                <h5 className="fw-bold mb-3">Min. 50% off | Unique kitchen finds | Amazon Brands & more</h5>

                <button
                    onClick={() => scroll("left")}
                    className="btn btn-light position-absolute top-50 start-0 translate-middle-y py-4 fs-5"
                >
                    &lt;
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="btn btn-light position-absolute top-50 end-0 translate-middle-y py-4 fs-5"
                >
                    &gt;
                </button>

                <div
                    ref={sliderRef}
                    className="d-flex flex-row overflow-auto gap-4"
                    style={{ scrollBehavior: "smooth" }}
                >
                    {productsData.map((product, index) => (
                        <NavLink
                            key={index}
                            className="d-flex flex-column align-items-center flex-shrink-0"
                            style={{ cursor: "pointer" }}
                            to={`/product-details/${product.id}`}
                        >
                            <div
                                className="d-flex justify-content-center align-items-center mb-2 tw-bg-gray-100 tw-w-52 tw-h-52"
                            >
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="img-fluid w-100 h-100"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <p className=" tw-text-sm tw-max-w-52 tw-line-clamp-1">{product.title}</p>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}
