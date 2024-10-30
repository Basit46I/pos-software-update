import React from 'react'

const OrderCategory = () => {

    const categories = [
        { id: 1, name: "Burger" },
        { id: 2, name: "Pizza" },
        { id: 3, name: "Dessert" },
        { id: 4, name: "Beverages" },
    ]

    return (
        <div className="w-75 d-flex align-items-center justify-content-between">
            {categories.map(category => (
                <div key={category.id} className="p-3 bg-white shadow-sm text-center rounded" style={{ width: "10%" }}>
                    {category.name}
                </div>
            ))}
        </div>
    )
}

export default OrderCategory