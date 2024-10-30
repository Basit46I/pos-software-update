import React, { useState } from 'react';

const AddSale = () => {

    const items = [
        { id: 1, name: "Mutton Biryani with Potato", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 2, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 3, name: "Mutton Biryani with Potato", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 4, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 5, name: "Mutton Biryani with Potato", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 6, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 7, name: "Mutton Biryani with Potato", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 8, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 9, name: "Mutton Biryani with Potato", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 10, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 11, name: "Mutton Biryani with Potato", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 12, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 13, name: "Mutton Biryani with Potato", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 14, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 15, name: "Mutton Biryani with Potato", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 16, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 17, name: "Mutton Biryani with Potato", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 18, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
    ];

    const [orderItems, setOrderItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    const addToOrder = (item) => {
        const existingItem = orderItems.find(orderItem => orderItem.id === item.id);

        if (existingItem) {
            const updatedItems = orderItems.map(orderItem =>
                orderItem.id === item.id
                    ? { ...orderItem, quantity: orderItem.quantity + 1 }
                    : orderItem
            );
            setOrderItems(updatedItems);
        } else {
            setOrderItems([...orderItems, { ...item, quantity: 1 }]);
        }

        setSubtotal(prevSubtotal => prevSubtotal + item.price);
    };

    const removeFromOrder = (itemId) => {
        const itemToRemove = orderItems.find(item => item.id === itemId);

        if (itemToRemove) {
            if (itemToRemove.quantity > 1) {
                const updatedItems = orderItems.map(item =>
                    item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
                );
                setOrderItems(updatedItems);
                setSubtotal(prevSubtotal => prevSubtotal - itemToRemove.price);
            } else {
                setOrderItems(orderItems.filter(item => item.id !== itemId));
                setSubtotal(prevSubtotal => prevSubtotal - itemToRemove.price);
            }
        }
    };

    const calculateTax = (amount) => amount * 0.1; // Example 10% tax
    const payableAmount = subtotal + calculateTax(subtotal);

    const formatNumber = (value) => {
        // Convert to a float to ensure decimal places
        const number = parseFloat(value);

        // Check if input is a valid number
        if (isNaN(number)) return "Invalid number";

        // Format with commas and two decimal places
        return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    return (
        <div className="container-fluid d-flex">
            {/* <!-- Left Menu Section --> */}
            <div className="menu-section d-flex flex-wrap align-self-start" style={{ width: "100%", gap: "20px" }}>
                {items.map(item => (
                    <div
                        key={item.id}
                        className="card shadow-sm border-0 menu-items"
                        style={{ padding: "1rem", width: "18%", height: "fit-content", cursor: "pointer" }}
                        onClick={() => addToOrder(item)}
                    >
                        <img src={item.img} className="rounded w-100" alt={item.name} />
                        <p className="text-center mt-2 mb-0" style={{ fontSize: "15px" }}>{item.name}</p>
                        <p className="text-center font-weight-bold m-0" style={{ fontSize: "15px" }}>Rs. {item.price}</p>
                    </div>
                ))}
            </div>

            {/* <!-- Right Order Summary Section --> */}
            <div className="order-summary bg-white shadow-sm d-flex flex-column justify-content-between"
                style={{ width: " 45%", padding: "1rem", height: "89vh", position: "sticky", top: "50px" }}>
                <div>
                    <h4 className="mb-3">Order Summary</h4>

                    {/* <!-- Order Items List --> */}
                    <div className="order-items-list" id="orderItemsList" style={{ flexGrow: "1", maxHeight: "60vh", overflowY: "auto" }}>
                        {orderItems.map((item, index) => (
                            <div
                                key={index}
                                className="order-item d-flex justify-content-between align-items-center p-2 mb-2 rounded" style={{ backgroundColor: "#d5d5d5" }}>
                                <span>{index + 1}. {item.name} {item.quantity > 1 && `x ${item.quantity}`}</span>
                                <span>
                                    Rs. {(item.price * item.quantity).toFixed(2)}
                                    <i
                                        className="bi bi-x-circle ml-4 custom-cursor-pointer"
                                        onClick={() => removeFromOrder(item.id)}
                                        style={{ cursor: "pointer" }}
                                    ></i>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <!-- Subtotal, Tax, and Checkout Button at the Bottom --> */}
                <div className="checkout-section mt-4">
                    <div className="d-flex justify-content-between align-items-center" id="subtotalAmount">
                        <p>Subtotal</p>
                        <p className="font-weight-bold">Rs {formatNumber(subtotal)}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center" id="taxAmount">
                        <p>Tax</p>
                        <p className="font-weight-bold">Rs {formatNumber(calculateTax(subtotal))}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center" id="payableAmount">
                        <p className="font-weight-bold">Payable Amount</p>
                        <p className="font-weight-bold">Rs {formatNumber(payableAmount)}</p>
                    </div>
                    <button className="btn btn-success w-100 mt-3">Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default AddSale