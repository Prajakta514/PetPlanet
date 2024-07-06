import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
  
const user = { id: "q", role: "admin" };

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="header">
            <div className="left-links">
                <Link to="/">Home</Link>
            </div>
            <div className="right-links">
                <Link to="/search"><FaSearch /></Link>
                <Link to="/cart"><FaShoppingBag /></Link>

                {user?.id ? (
                    <>
                        <button onClick={() => setIsOpen(prev => !prev)}>
                            <FaUser />
                        </button>
                        <dialog open={isOpen}>
                            <div>
                                {user.role === "admin" && (
                                    <Link to="#admin">Admin</Link>
                                )}
                                <Link to="/orders">Orders</Link>
                                <button><FaSignOutAlt /></button>
                            </div>
                        </dialog>
                    </>
                ) : (
                    <Link to="/login"><FaSignInAlt /></Link>
                )}
            </div>
        </nav>
    );
};
