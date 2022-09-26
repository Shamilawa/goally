import React, { useState } from 'react'

// Hooks
import { useLogin } from '../hooks/useLogin'

// Componenents and pages
import Button from '../components/Button'
import Input from '../components/Input'

function Login() {

    // States to get store email and password
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { error, loading, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        // login function from useLogin hook
        login(email, password)

        // clear up the states
        setPassword("")

    }

    return (
        <div>
            <div className='bg-light_blue h-screen'>
                <div className='pt-10 md:pt-20'>
                    <div className='mx-4 bg-white py-6 px-6 rounded-md drop-shadow-md sm:w-380px  sm:mx-auto'>
                        <h3 className='text-primary text-base font-semibold mb-10'>Login</h3>

                        <form onSubmit={handleSubmit} className='mb-8'>

                            <label className='text-primary text-xs block mb-4'>Email</label>
                            <Input value={email} state={setEmail} placeholder="yourmail@mail.com" type="email" />

                            <label className='text-primary text-xs block mb-4'>Password</label>
                            <Input value={password} state={setPassword} placeholder={"***********"} type="password" />

                            <Button isLoading={loading}>
                                <span className='block text-left py-1 text-sm -ml-4'>Login</span>
                            </Button>

                        </form>

                        {error && <p className='text-center text-xs text-red mb-2 cursor-pointer'>{error}</p>}
                        <p className='text-center text-xs text-primary mb-12 cursor-pointer'>Forgot Password</p>
                        <p className='text-center text-xs text-primary font-normal mb-2'>Don't have an account</p>
                        <p className='text-center text-sm text-primary font-semibold mb-4 cursor-pointer'>Sign up</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login