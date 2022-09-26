import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";

// Importing Icons 
import { HamburgerIcon } from 'react-hamburger-icon';
import { MdNotificationAdd } from "react-icons/md";

// Pages and components
import Button from './Button';

// Importing assets
import avatar from "../assets/images/avatar.png";



function MobileMenu() {

    // Hamburg menu state
    const [open, setOpen] = useState(false);

    // State to keep track of user's frist name
    const [firstName, setFirstName] = useState("");

    // Getting the authenticated user from AuthContext
    const { user, dispatch } = useAuthContext();


    useEffect(() => {
        // Getting the first name of the use - first name is name[0]
        if (user) {
            const name = user.user.fullName.trim().split(/\s+/);
            setFirstName(name[0]);
        }
    }, [firstName, user]);


    // This function handle the state update upon the user logout
    const handleLogOut = () => {
        // update Authcontext
        dispatch({ type: "LOGOUT" });

        // remove item from localstorage
        localStorage.removeItem("user")
    };



    return (
        <div>
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

                            {/* Conditionally generate the navigation section based on user authentications */}
                            {user ? (
                                //when the user is authenticated
                                <div>
                                    <div className="mt-20 mx-2 mb-10 flex justify-between items-center">
                                        <span className="mx-3 ">{firstName}asdsa</span>
                                        <img
                                            className="w-12 h-12 mx-3 cursor-pointer"
                                            src={avatar}
                                            alt="avatar"
                                        />
                                    </div>
                                    <span className='mx-auto' onClick={() => handleLogOut()}>
                                        <Button mobile={false}>Logout</Button>
                                    </span>
                                </div>
                            ) : (
                                //when the user is not authenticated
                                <div className='flex justify-between w-full mt-10'>
                                    <Button mobile={true}>
                                        <Link onClick={() => setOpen(!open)} to="/login">Log in</Link>
                                    </Button>
                                    <Button mobile={true}>
                                        <Link onClick={() => setOpen(!open)} to="/signup">Sign up</Link>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </motion.ul>
                }
            </AnimatePresence>
        </div>
    )
}

export default MobileMenu