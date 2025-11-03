import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route} from "react-router";
import Bravo from "./Bravo.jsx"
import Layout from "./Layout.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<App />}/>
      <Route path="/bravo" element={<Bravo />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
