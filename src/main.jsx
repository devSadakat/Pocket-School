// import React, { StrictMode } from 'react'
import {
  RouterProvider
} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routes/Routes.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
