import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Routes'
import { Toaster } from 'react-hot-toast'
import { OrderProvider } from './Components/Context/OrderContext '

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto'>
      <OrderProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </OrderProvider>
    </div>

  )
}

export default App
