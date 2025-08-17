import React from 'react'
import './Home.css';
// import { useNavigate } from "react-router-dom";
export default function Categories() {
    // const navigate = useNavigate();
    const categoryData = [];
    return (
        <div className='container category'>
        <div className='row'>
            {categoryData.map((category) => (
            <div className='col-lg-3 col-md-4 col-sm-6 mb-3' key={category.id}>
                <div className='card p-3 h-100'>
                <h5 className='card-title'>{category.plot}</h5>
                <div className='card-body row'>
                    {category.subcategories.map((ele) => {
                    return (
                        <div className='category-item col-6 d-flex flex-column justify-content-center align-items-center' key={ele.category} onClick={() =>``}>
                        <img src={ele.img} alt={ele.title} className='img-fluid' />
                        <h6 className='my-2'>{ele.title}</h6>
                        </div>
                    );
                    })}
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}
