import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/index.ts'

export const withRedux = (component: () => React.ReactNode) => () => {
    return <Provider store={store}>{component()}</Provider>
}
