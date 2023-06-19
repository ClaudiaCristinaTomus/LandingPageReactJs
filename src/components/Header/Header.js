import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FaIceCream } from 'react-icons/fa';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to="/" className='logo'>
                        <FaIceCream />Beach Cafe
                    </Link>
                </h1>
            </div>
            <div className={`${"nav"} ${menuOpen && size.width < 768 ? "isMenu" : ""
                }`}>
                <ul>
                    <li>
                        <Link to="/" onClick={menuToggleHandler}>Shop</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/products" activeClassName="activeItem" onClick={menuToggleHandler}>Recipes</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/products" activeClassName="activeItem" onClick={menuToggleHandler}>Menu</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/products" activeClassName="activeItem" onClick={menuToggleHandler}>Hotline</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/signup" activeClassName="activeItem" onClick={menuToggleHandler}><FaUserAlt /></Link>
                    </li>
                </ul>
            </div>
            <div className="toggle">
                {!menuOpen ? (
                    <BiMenuAltRight onClick={menuToggleHandler} />
                ) : (
                    <AiOutlineClose onClick={menuToggleHandler} />
                )}
            </div>
        </header>

    )
}


export default Header