import React, { useState } from 'react';
import './Categories.css';
import categoryData from '../../../categoryData.json';
import { NavLink } from 'react-router-dom';

export default function Categories() {

    const [expanded, setExpanded] = useState({});

    const toggleExpand = (id) => {
        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="tw-px-5 category tw--mt-[50px] lg:tw--mt-[230px] md:tw--mt-[150px]">
            <div className="row">
                {categoryData.map((category) => {
                    const isExpanded = expanded[category.id] || false;
                    const visibleSubs = isExpanded
                        ? category.subcategories
                        : category.subcategories.slice(0, 4);

                    return (
                        <div
                            className="col-lg-3 col-md-4 col-sm-6 mb-3 "
                            key={category.id}
                        >
                            <div className="card p-3 h-100 tw-rounded-none">
                                <h5 className=" tw-font-bold tw-text-xl">{category.plot}</h5>
                                <div className="row">
                                    {visibleSubs.map((ele) => (
                                        <NavLink
                                            className="category-item col-6 d-flex flex-column justify-content-center align-items-center hover:tw-text-yellow-600"
                                            key={ele.category}
                                            to={`/products/${ele.category}`}
                                        >
                                            <img
                                                src={ele.img}
                                                alt={ele.title}
                                                className="img-fluid"
                                            />
                                            <h6 className="my-2 tw-text-xs">{ele.title}</h6>
                                        </NavLink>
                                    ))}

                                    {category.subcategories.length > 4 && (
                                        <div className="">
                                            <button
                                                className=" hover:tw-text-yellow-600 tw-font-bold tw-text-sm"
                                                onClick={() => toggleExpand(category.id)}
                                            >
                                                {isExpanded ? 'See Less' : 'See More'}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
