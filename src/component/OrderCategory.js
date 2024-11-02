import React from 'react'

const OrderCategory = () => {
    const categories = [
        { id: 1, name: "Burger", img: "images/category-images/burger-image.jpg" },
        { id: 2, name: "Burger", img: "images/category-images/burger-image.jpg" },
        { id: 3, name: "Burger", img: "images/category-images/burger-image.jpg" },
        { id: 4, name: "Burger", img: "images/category-images/burger-image.jpg" },
        { id: 5, name: "Burger", img: "images/category-images/burger-image.jpg" },
        { id: 6, name: "Burger", img: "images/category-images/burger-image.jpg" },
        { id: 7, name: "Burger", img: "images/category-images/burger-image.jpg" },
    ]

    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center" style={{ width: "50%" }}>
            {/* {categories.map(category => (
                <div key={category.id} className="p-1 m-1 bg-white shadow-sm rounded d-flex flex-column align-items-center" style={{ width: "100px", height: "100px" }}>
                    <div style={{ width: "45px", height: "45px" }}>
                        <img className="w-100 h-100" src={category.img} alt={category.name} />
                    </div>
                    <div className="text-center" style={{ fontSize: "0.80rem" }}>
                        {category.name}
                    </div>
                </div>
            ))} */}
        </div>
    )
}

export default OrderCategory
