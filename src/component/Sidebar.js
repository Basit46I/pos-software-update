import React, { useState } from 'react';
import AddSale from './AddSale';
import Header from './Header';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="d-flex" style={{ backgroundColor: "#f4f6f9", minHeight: "100vh", display: "flex" }}>
            {/* Sidebar */}
            <div
                className={`sidebar d-flex flex-column bg-dark text-white p-3 ${collapsed ? 'collapsed' : ''}`}
                style={{
                    position: 'fixed',
                    width: collapsed ? '80px' : '250px',
                    height: '100vh',
                    overflowY: 'auto',
                    transition: 'width 0.3s',
                    boxShadow: 'rgba(0, 0, 0, 0.2) 4px -4px 8px 0px'
                }}
            >
                <div className="sidebar-heading mb-3 text-center">
                    <img src="logo192.png" alt="Logo" className={`${collapsed ? "" : "mb-2 me-3"}`} />
                    {!collapsed && <h5>Point of sale</h5>}
                </div>
                <ul className="nav flex-column">
                    {[
                        { href: "/", icon: "fas fa-plus-circle", label: "Sale" }
                    ].map((item, index) => (
                        <li className="nav-item" key={index}>
                            <a href={item.href} className={`nav-link d-flex ${collapsed ? 'justify-content-center' : ''} align-items-center`}>
                                <i className={`nav-icon ${item.icon} ${collapsed ? '' : 'me-3'}`} style={{ width: `${collapsed ? '' : '20px'}`, textAlign: "center" }}></i>
                                {!collapsed && <p className="m-0">{item.label}</p>}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>

            {/* Main Content */}
            <div
                className="content flex-grow-1"
                style={{
                    marginLeft: collapsed ? "80px" : "250px",
                    width: `calc(100% - ${collapsed ? "80px" : "250px"})`,
                    transition: 'margin-left 0.3s, width 0.3s'
                }}
            >
                <Header toggleSidebar={toggleSidebar} />
                <div className="px-2 py-3">
                    <div className="p-3">
                    </div>
                    <AddSale />
                </div>
            </div>
        </div >
    );
};

export default Sidebar;
