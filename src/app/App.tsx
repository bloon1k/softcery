import React from 'react'
import { Header } from '../entities'
import { withRedux, withRouter } from './providers'
import { Routes } from './routes/index.ts'

const App = () => {
    return (
        <div>
            <Header />
            <section className="app">
                <Routes />
            </section>
        </div>
    )
}

export default withRouter(withRedux(App))
