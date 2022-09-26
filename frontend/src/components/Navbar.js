import React from 'react'
import { Link } from "react-router-dom"

// Pages and components
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

function Navbar() {

    return (
        <div className='mx-auto flex justify-between items-center py-4 px-2 sm:drop-shadow-sm sm:px-10 bg-white sm:py-6'>

            {/* Logo */}
            <div>
                <h1 className='text-2xl font-extrabold cursor-pointer sm:tracking-wide sm:text-4xl text-primary'>
                    <Link to="/">Goally</Link>
                </h1>
            </div>

            {/* Nav Menu container */}
            <div>
                <nav className='relative'>

                    {/* Mobile Menu */}
                    <MobileMenu />

                    {/* Desktop Menu */}
                    <DesktopMenu />

                </nav>
            </div>
        </div>
    )
}

export default Navbar