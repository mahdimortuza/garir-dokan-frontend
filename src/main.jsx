import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routs/Routs';
import AuthProvider from './Providers/AuthProvider';
import './App.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='main-section'>
  <div className='body-section text-white mx-auto max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
  </div>
)