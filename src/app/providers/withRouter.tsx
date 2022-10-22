import React from 'react'
import { HashRouter } from 'react-router-dom'

export const withRouter = (component: () => React.ReactNode) => () => {
    return <HashRouter>{component()}</HashRouter>
}
