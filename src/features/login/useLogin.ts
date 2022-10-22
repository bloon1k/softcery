import React from 'react'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
    const navigate = useNavigate()

    function login(nameInputRef: React.RefObject<HTMLInputElement>) {
        if (nameInputRef.current !== null) {
            if (nameInputRef.current.value.length < 3) {
                alert('name must be at least 3 characters long')
            } else {
                localStorage.setItem('userName', nameInputRef.current.value)
                navigate('/')
                window.location.reload()
            }
        }
    }

    return { login }
}

export { useLogin }
