import React from 'react'

// importing motion framer
import { motion } from "framer-motion"

function Button(props) {
    return (
        <motion.button
            className={props.mobile ? 'px-8 py-1 mx-2 bg-grenn rounded text-white font-medium cursor-pointer w-full hover:bg-dark_green' : 'px-8 py-1 bg-grenn rounded text-white font-medium cursor-pointer w-full hover:bg-dark_green'}
        >
            {props.children}
        </motion.button>
    )
}

export default Button