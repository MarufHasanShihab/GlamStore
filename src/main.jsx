import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Routes'
import ProductProvider from './Context/ProductContext'
import SideProvider from './Context/SideContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideProvider>
    <ProductProvider>
    <RouterProvider router={router}/>
    </ProductProvider>
    </SideProvider>
  </StrictMode>,
)
