import React, { useState } from 'react'

// Componenents and pages
import Button from '../components/Button'
import Input from '../components/Input'

function Signup() {

    // States to get store email and password
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(email, password);

        // clear up the states
        setFullName("")
        setEmail("")
        setPassword("")

    }

    return (
        <div>
            <div className='bg-light_blue h-screen'>
                <div className='pt-10 md:pt-20'>
                    <div className='mx-4 bg-white py-6 px-6 rounded-md drop-shadow-md sm:w-380px  sm:mx-auto'>
                        <h3 className='text-primary text-base font-semibold mb-10'>Sign Up</h3>

                        <form onSubmit={handleSubmit} className='mb-8'>

                            <label className='text-primary text-xs block mb-4'>Full Name</label>
                            <Input value={fullName} state={setFullName} placeholder="Lesli Alexander" type="text" />

                            <label className='text-primary text-xs block mb-4'>Email</label>
                            <Input value={email} state={setEmail} placeholder="yourmail@mail.com" type="email" />

                            <label className='text-primary text-xs block mb-4'>Password</label>
                            <Input value={password} state={setPassword} placeholder={"***********"} type="password" />

                            <Button>
                                <span className='block text-left py-1 text-sm'>Sign up</span>
                            </Button>

                        </form>

                        <p className='text-center text-xs text-primary font-normal mb-2'>Already have an account</p>
                        <p className='text-center text-sm text-primary font-semibold mb-4 cursor-pointer'>Log in</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup