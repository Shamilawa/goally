import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [loading, setIsLoading] = useState(null)

    // importing authContext via useAuthContext
    const { dispatch } = useAuthContext()

    const signup = async (fullName, email, password) => {

        setIsLoading(true)

        // Send the post request to the backend
        const response = await fetch("http://localhost:4000/api/user/signup", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName, email, password })
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
            localStorage.setItem("user", JSON.stringify(json))

            // update the Authcontext
            dispatch({ type: "LOGIN", payload: json })
            setIsLoading(false)
        }
    }

    return { error, loading, signup }
}