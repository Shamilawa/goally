import { useState } from "react"


export const useLogin = () => {
    const [error, setError] = useState(null)
    const [loading, setIsLoading] = useState(null)

    const login = async (email, password) => {

        setIsLoading(true)

        // Send the post request to the backend
        const response = await fetch("http://localhost:4000/api/user/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        // Getting data from the response
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setIsLoading(false)
            return
        }

        if (response.ok) {
            // save the user to local storage

            // update the Authcontext
            console.log(json);
            setIsLoading(false)
        }
    }

    return { error, loading, login }
}