import React from 'react'
import './categories.css'
export default function Categories() {
const categoryData = [
  {
    id: "01",
    plot: "Up to 70% off | Styles for women",
    subcategories: [
      {
        title: "Clothing",
        category: "Cushion covers, bedsheets & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Figurines, vases & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Home storage",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "womens-dresses",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
    ]
  },
  {
    id: "02",
    plot: "Up to 70% off | Styles for women",
    subcategories: [
      {
        title: "Clothing",
        category: "Cushion covers, bedsheets & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Figurines, vases & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Home storage",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "womens-dresses",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
    ]
  },
  {
    id: "03",
    plot: "Up to 70% off | Styles for women",
    subcategories: [
      {
        title: "Clothing",
        category: "Cushion covers, bedsheets & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Figurines, vases & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Home storage",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "womens-dresses",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
    ]
  },
  {
    id: "04",
    plot: "Up to 70% off | Styles for women",
    subcategories: [
      {
        title: "Clothing",
        category: "Cushion covers, bedsheets & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Figurines, vases & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Home storage",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "womens-dresses",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
    ]
  },
  {
    id: "05",
    plot: "Up to 70% off | Styles for women",
    subcategories: [
      {
        title: "Clothing",
        category: "Cushion covers, bedsheets & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Figurines, vases & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Home storage",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "womens-dresses",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
    ]
  },
  {
    id: "06",
    plot: "Up to 70% off | Styles for women",
    subcategories: [
      {
        title: "Clothing",
        category: "Cushion covers, bedsheets & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Figurines, vases & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Home storage",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "womens-dresses",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
    ]
  },
  {
    id: "07",
    plot: "Up to 70% off | Styles for women",
    subcategories: [
      {
        title: "Clothing",
        category: "Cushion covers, bedsheets & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Figurines, vases & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Home storage",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "womens-dresses",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
    ]
  },
  {
    id: "08",
    plot: "Up to 70% off | Styles for women",
    subcategories: [
      {
        title: "Clothing",
        category: "Cushion covers, bedsheets & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Figurines, vases & more",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "Home storage",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
      {
        title: "Clothing",
        category: "womens-dresses",
        img: "https://cdn.salla.sa/gGPZZ/Gp5b0I9MwLP7zOeirRRsuH29DvbupfmAHhMA5Pn1.jpg",
      },
    ]
  },
];
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
                    <div className='category-item col-6 d-flex flex-column justify-content-center align-items-center' key={ele.category}>
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
