import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Routes'
import ProductProvider from './Context/ProductContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
    <RouterProvider router={router}/>
    </ProductProvider>
  </StrictMode>,
)
