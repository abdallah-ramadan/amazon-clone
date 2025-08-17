import React from 'react'
import { useRef } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import img1 from '../../assets/banner/bannerImage1.jpg'
import img2 from '../../assets/banner/bannerImage2.jpg'
import img3 from '../../assets/banner/bannerImage3.jpg'
import img4 from '../../assets/banner/bannerImage4.jpg'
import img5 from '../../assets/banner/bannerImage5.jpg'
import Categories from '../../components/categories/Categories';
import { useNavigate } from "react-router-dom";
export default function Home() {
    const sliderRef = useRef(null);
    const navigate = useNavigate();
    const scroll = (direction) => {
    if (sliderRef.current) {
        sliderRef.current.scrollBy({
            left: direction === "left" ? -300 : 300,
            behavior: "smooth",
        });
        }
    };
    const productsData = [];
    return (
        <div >
            {/* slider */}
            <div >
                <Carousel  data-bs-theme="dark" indicators={false}>
                    <Carousel.Item className='slider'>
                        <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='slider'>
                        <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='slider'>
                        <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='slider'>
                        <img
                        className="d-block w-100"
                        src={img4}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='slider'>
                        <img
                        className="d-block w-100"
                        src={img5}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* Category  */}
            <Categories />

            {/* Best Sellers */}
            <div className="position-relative p-3 container mb-5 mt-2 bg-white">
                <h5 className="fw-bold mb-3">Min. 50% off | Unique kitchen finds | Amazon Brands & more</h5>

                <button onClick={() => scroll("left")} className="btn btn-light position-absolute top-50 start-0 translate-middle-y py-4 fs-5">
                    &lt;
                </button>
                <button onClick={() => scroll("right")} className="btn btn-light position-absolute top-50 end-0 translate-middle-y py-4 fs-5">
                    &gt;
                </button>

                <div ref={sliderRef} className="d-flex flex-row overflow-auto gap-4" style={{ scrollBehavior: "smooth" }}>
                    {productsData.map((product, index) => (
                        <div key={index} className="d-flex flex-column align-items-center flex-shrink-0" style={{cursor: "pointer"}} onClick={() => navigate(`${product.title}`)}>
                            <div className=" d-flex justify-content-center align-items-center mb-2" style={{ width: "150px", height: "150px" }}>
                            <img src={product.image} alt="product" className="img-fluid w-100 h-100" />
                            </div>
                            <p className="small text-center">{product.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}
