import React from 'react'

function Input({ placeholder, state, type, value }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className='block w-full bg-light_blue rounded py-3 px-4 mb-6 text-sm'
            onChange={(e) => state(e.target.value)}
            value={value}
            required
        />
    )
}

export default Input