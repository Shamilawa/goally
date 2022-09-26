import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

// Hamburger Menu Icon importing
import { HamburgerIcon } from 'react-hamburger-icon';

// Pages and components
import Button from './Button';

function Navbar() {

    // Hamburg menu state
    const [open, setOpen] = useState(false);

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
                    <div className='absolute -mt-2 right-2 sm:hidden z-20'>
                        <HamburgerIcon open={open} onClick={() => setOpen(!open)} />
                    </div>

                    <AnimatePresence>
                        {open &&
                            <motion.ul
                                className='flex items-center justify-center w-80 h-screen fixed top-0 pointer-events-auto z-10 bg-white sm:hidden'
                                animate={{ right: 0 }}
                                exit={{ right: "-330px" }}
                            >
                                <div className='w-screen px-4 flex flex-col'>
                                    <div className='flex flex-col items-center'>
                                        <Link onClick={() => setOpen(!open)} to="/" className='text-xl font-medium text-primary w-full text-center py-2 bg-btn_grey rounded my-2'>
                                            <span >Home</span>
                                        </Link>
                                        <Link onClick={() => setOpen(!open)} to="/about" className='text-xl font-medium text-primary w-full text-center py-2 bg-btn_grey rounded my-2'>
                                            <span >About</span>
                                        </Link>
                                        <Link onClick={() => setOpen(!open)} to="/contact" className='text-xl font-medium text-primary w-full text-center py-2 bg-btn_grey rounded my-2'>
                                            <span >Contact</span>
                                        </Link>
                                    </div>
                                    <div className='flex justify-between w-full mt-10'>
                                        <Button mobile={true}>
                                            <Link onClick={() => setOpen(!open)} to="/login">Log in</Link>
                                        </Button>
                                        <Button mobile={true}>
                                            <Link onClick={() => setOpen(!open)} to="/signup">Sign up</Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.ul>
                        }
                    </AnimatePresence>


                    {/* Desktop Menu */}
                    <ul className='hidden items-center sm:flex'>
                        <Link to="/">
                            <span className='mx-6 text-primary font-medium cursor-pointer hover:border-b'>Home</span>
                        </Link>
                        <Link to="/about">
                            <span className='mx-6 text-primary font-medium cursor-pointer hover:border-b'>About</span>
                        </Link>
                        <Link to="/contact">
                            <span className='mx-6 text-primary font-medium cursor-pointer hover:border-b'>Contact</span>
                        </Link>
                        <div className='mx-2'>
                            <Button mobile={false}>
                                <Link to="/login">Log in</Link>
                            </Button>
                        </div>
                        <div className='mx-2'>
                            <Button mobile={false}>
                                <Link to="/signup">Sign up</Link>
                            </Button>
                        </div>
                    </ul>

                </nav>
            </div>
        </div>
    )
}

export default Navbar