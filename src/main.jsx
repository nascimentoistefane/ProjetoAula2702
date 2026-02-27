import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Header } from './components/Header/Header.jsx'
import { Sobre } from './components/Sobre/Sobre.jsx'
import { Contato } from './components/Contato/Contato.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Sobre categoria="sobreMim"/>
    <Contato categoria="contato"/>
  </React.StrictMode>,
)
