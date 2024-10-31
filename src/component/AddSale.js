import React, { useState } from 'react';

const AddSale = () => {

    // Order Items
    const items = [
        { id: 1, name: "Mutton Biryani", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 2, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 3, name: "Mutton Biryani", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 4, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 5, name: "Mutton Biryani", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 6, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 7, name: "Mutton Biryani", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 8, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 9, name: "Mutton Biryani", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 10, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 11, name: "Mutton Biryani", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 12, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 13, name: "Mutton Biryani", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 14, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 15, name: "Mutton Biryani", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 16, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
        { id: 17, name: "Mutton Biryani", price: 150, img: "images/Best-Mutton-Biryani-Recipe.jpg" },
        { id: 18, name: "Zinger Burger", price: 200, img: "images/zinger-burgerpsd.jpg" },
    ];

    const [orderItems, setOrderItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    // Add item to the order summary with initial quantity of 1
    const addToOrder = (item) => {
        const existingItem = orderItems.find(orderItem => orderItem.id === item.id);

        if (existingItem) {
            incrementQuantity(item.id);
        } else {
            setOrderItems([...orderItems, { ...item, quantity: 1 }]);
            setSubtotal(prevSubtotal => prevSubtotal + item.price);
        }
    };

    // Increment the quantity of an item
    const incrementQuantity = (itemId) => {
        const updatedItems = orderItems.map(item =>
            item.id === itemId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        const item = orderItems.find(item => item.id === itemId);
        setOrderItems(updatedItems);
        setSubtotal(prevSubtotal => prevSubtotal + item.price);
    };

    // Decrement the quantity of an item
    const decrementQuantity = (itemId) => {
        const item = orderItems.find(item => item.id === itemId);

        if (item && item.quantity > 1) {
            const updatedItems = orderItems.map(item =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            setOrderItems(updatedItems);
            setSubtotal(prevSubtotal => prevSubtotal - item.price);
        } else if (item && item.quantity === 1) {
            removeFromOrder(itemId);
        }
    };

    // Remove item from the order summary
    const removeFromOrder = (itemId) => {
        const itemToRemove = orderItems.find(item => item.id === itemId);

        if (itemToRemove) {
            setOrderItems(orderItems.filter(item => item.id !== itemId));
            setSubtotal(prevSubtotal => prevSubtotal - (itemToRemove.price * itemToRemove.quantity));
        }
    };

    // Calculate tax value and add it into total amount
    const calculateTax = (amount) => amount * 0.1; // Example 10% tax
    const payableAmount = subtotal + calculateTax(subtotal);

    // Format numbers with commas and two decimal places
    const formatNumber = (value) => {
        const number = parseFloat(value);
        if (isNaN(number)) return "Invalid number";
        return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    return (
        <div className="container-fluid d-flex">
            {/* Left Menu Section */}
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

            {/* Right Order Summary Section */}
            <div className="order-summary bg-white shadow-sm d-flex flex-column justify-content-between"
                style={{ width: "45%", padding: "1rem", height: "89vh", position: "sticky", top: "50px" }}>
                <div>
                    <h4 className="mb-3">Order Summary</h4>

                    {/* Order Items List */}
                    <div className="order-items-list" id="orderItemsList" style={{ flexGrow: "1", maxHeight: "60vh", overflowY: "auto" }}>
                        {orderItems.map((item, index) => (
                            <div key={item.id} className="order-item d-flex justify-content-between align-items-center p-2 mb-2 rounded border-bottom">
                                <div className="d-flex align-items-center">
                                    <img src={item.img} className="rounded me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} alt={item.name} />
                                    <div style={{ width: "150px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                        <div style={{ fontWeight: "bold" }}>{item.name}</div>
                                        <div style={{ color: "#6c757d", fontSize: "0.8rem" }}>350g</div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center">
                                    <button className="btn btn-outline-success rounded-circle me-2" style={{ width: "22px", height: "22px", fontSize: "14px", padding: "0" }}
                                        onClick={() => decrementQuantity(item.id)}>-</button>
                                    <span style={{ fontSize: "14px" }}>{item.quantity}</span>
                                    <button className="btn btn-outline-success rounded-circle ms-2" style={{ width: "22px", height: "22px", fontSize: "14px", padding: "0" }}
                                        onClick={() => incrementQuantity(item.id)}>+</button>
                                </div>

                                <div className="d-flex align-items-center">
                                    <span style={{ fontWeight: "bold" }}>Rs. {formatNumber(item.price * item.quantity)}</span>
                                    <i className="bi bi-x-circle ms-3 custom-cursor-pointer" onClick={() => removeFromOrder(item.id)} style={{ color: "#6c757d" }}></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subtotal, Tax, and Checkout Button at the Bottom */}
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

export default AddSale;
