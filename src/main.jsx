import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Routes'
import ProductProvider from './Context/ProductContext'
import SideProvider from './Context/SideContext'
import CartProvider from './Context/CartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideProvider>
    <CartProvider>
    <ProductProvider>
    <RouterProvider router={router}/>
    </ProductProvider>
    </CartProvider>
    </SideProvider>
  </StrictMode>,
)
