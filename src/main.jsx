import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./styles/normalize.css"
import { GlobalStyle } from './styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
)
