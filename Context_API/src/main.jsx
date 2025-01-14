import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterProvider } from './context/Counter.jsx'
import { CartContextProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/*     <CounterProvider> this contextProvider for Counter component */}
    <CartContextProvider>
    <App/>
    </CartContextProvider>
    {/*  </CounterProvider> */}

  </StrictMode>,
)
