import React from 'react'
import { Navigate } from 'react-router-dom'
import { changePlayerName } from '../redux/index.ts'
import { useTypedDispatch, useTypedSelector } from '../typedHooks'

export const useWithAuth = (component: () => React.ReactNode) => {
    const dispatch = useTypedDispatch()
    const userName: string = useTypedSelector((state) => state.player.name)

    if (localStorage.getItem('userName') && !userName) {
        dispatch(changePlayerName(localStorage.getItem('userName')))
    } else if (!localStorage.getItem('userName')) {
        return <Navigate to={'/Login'} />
    }
    return component
}
