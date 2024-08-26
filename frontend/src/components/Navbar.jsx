import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaBook } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = React.useState(false);
    const [issticky, setSticky] = React.useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // navitems here 
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Shop', path: '/shop' },
        { name: 'Book', path: '/book' },
        { name: 'Blog', path: '/blog' },
        { name: 'Sell', path: '/admin/dashboard' },
    ];

    // Check if the current location is the main route '/'
    const isMainRoute = location.pathname === '/';

    return (
        <header>
            {isMainRoute && (
                <nav>
                    <div>
                        {/* logo */}
                        <Link to='/' className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                            <FaBook className='inline-block' />Books
                        </Link>

                        <ul className='flex flex-row gap-5 justify-center items-center text-black text-xl sm:text-2xl cursor-pointer hover:text-blue-700 p-4 sm:p-6 transition duration-200 ease-in-out transform hover:scale-105'
                        >
                            {navItems.map(({ name, path }) => (
                                <Link
                                    to={path}
                                    key={path}
                                    className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'
                                >
                                    {name}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Navbar;