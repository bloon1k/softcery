import React from 'react'
import { Routes as RoutesList, Route } from 'react-router-dom'
import { Game, LoginForm } from '../../pages'
import { useWithAuth } from '../providers/index.ts'

const Routes: React.FC = () => {
    return (
        <RoutesList>
            <Route path={'/'} element={useWithAuth(<Game />)} />
            <Route path={'login'} element={<LoginForm />} />
        </RoutesList>
    )
}

export { Routes }
