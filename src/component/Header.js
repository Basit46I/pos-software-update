import React from 'react';

const Header = ({ toggleSidebar }) => {
    return (
        <div className="p-2 bg-white shadow-sm">
            <div>
                <i
                    className="bi bi-list px-3 fs-5 custom-cursor-pointer"
                    onClick={toggleSidebar}
                ></i>
            </div>
        </div>
    );
};

export default Header;
