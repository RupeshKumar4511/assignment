import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home  from './components/Home.jsx'
import  LogIn  from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path:'/',element:<App/>,children:[
      {
        index:true, element:<Home/>
      },
      {
        path:'/login',element:<LogIn/>
      },
      {
        path:'/signup',element:<SignUp/>
      },
      {
        path:'/dashboard',element:<ProtectedRoute> <Dashboard/>
        </ProtectedRoute>
       
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
          <App />
    </RouterProvider>
  </StrictMode>,
)
