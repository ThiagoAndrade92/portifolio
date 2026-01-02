import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// React Router
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error("Elemento #root não encontrado")
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename="/portifolio/">
      <App />
    </BrowserRouter>
  </StrictMode>
)
