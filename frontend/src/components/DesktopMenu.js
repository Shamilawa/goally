import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

// Importing Icons
import { MdNotificationAdd } from "react-icons/md";

// Importing assets
import avatar from "../assets/images/avatar.png";

// pages and components
import Button from "./Button";

function DesktopMenu() {

    // State to keep track of user's frist name
    const [firstName, setFirstName] = useState("");

    // state to keep track of user model open and close
    const [userModel, setUserModel] = useState(false);

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
        // updating the Authcontext
        dispatch({ type: "LOGOUT" });
        setUserModel(false);

        // remove item from localstorage
        localStorage.removeItem("user")
    };


    return (
        <ul className="hidden items-center sm:flex">
            <Link to="/">
                <span className="mx-6 text-primary cursor-pointer hover:border-b">
                    Home
                </span>
            </Link>
            <Link to="/about">
                <span className="mx-6 text-primary cursor-pointer hover:border-b">
                    About
                </span>
            </Link>
            <Link to="/contact">
                <span className="mx-6 text-primary cursor-pointer hover:border-b">
                    Contact
                </span>
            </Link>

            {/* Conditionally generate the navigation section based on user authentications */}
            {user ? (
                //When the user is authenticated -render this
                <div className="ml-20">
                    <div className="mx-2 flex items-center">
                        <MdNotificationAdd
                            size="1.5em"
                            className="text-primary cursor-pointer mx-3"
                        />
                        <span className="mx-3 ">{firstName}</span>
                        <img
                            className="w-12 h-12 mx-3 cursor-pointer"
                            src={avatar}
                            alt="avatar"
                            onClick={() => setUserModel(!userModel)}
                        />
                    </div>

                    {/* Opening and closing user model card based on state update onClick */}
                    {userModel && (
                        <div className="bg-white px-12 py-16 text-center fixed right-12 top-28 shadow-sm w-80">
                            <img src={avatar} alt="avatar" className="mx-auto mb-8" />
                            <h5 className="text-base font-semibold text-primary">
                                {user.user.fullName}
                            </h5>
                            <p className="text-sm font-light text-primary mb-8">
                                {user.user.email}
                            </p>
                            <span onClick={() => handleLogOut()}>
                                <Button mobile={false}>Logout</Button>
                            </span>
                        </div>
                    )}
                </div>
            ) : (
                //when the user is not authenticated - render this
                <div className="flex">
                    <div className="mx-2">
                        <Button mobile={false}>
                            <Link to="/login">Log in</Link>
                        </Button>
                    </div>
                    <div className="mx-2">
                        <Button mobile={false}>
                            <Link to="/signup">Sign up</Link>
                        </Button>
                    </div>
                </div>
            )}
        </ul>
    );
}

export default DesktopMenu;
