import React from 'react'

const OrderCategory = () => {

    const categories = [
        { id: 1, name: "Burger" },
        { id: 2, name: "Pizza" },
        { id: 3, name: "Dessert" },
        { id: 4, name: "Beverages" },
        { id: 5, name: "Pizza" },
        { id: 6, name: "Dessert" },
    ]

    return (
        <div className="d-flex align-items-center justify-content-between" style={{ width: "66.5%" }}>
            {categories.map(category => (
                <div key={category.id} className="p-3 bg-white shadow-sm text-center rounded" style={{ width: "10%" }}>
                    {category.name}
                </div>
            ))}
        </div>
    )
}

export default OrderCategory