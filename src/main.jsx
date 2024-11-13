import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Otp from './Otp.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Otp />
  </>,
)
