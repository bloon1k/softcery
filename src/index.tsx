import React from 'react'
import { createRoot } from 'react-dom/client'
import './app/index.scss'
import App from './app/App'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(<App />)
