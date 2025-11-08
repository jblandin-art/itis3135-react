import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import Introduction from "./Introduction.jsx"
import Contract from "./Contract.jsx"
import Layout from "./Layout.jsx"
import { HelmetProvider } from "react-helmet-async";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<App />}/>
      <Route path="introduction" element={<Introduction />}/>
      <Route path="contract" element={<Contract />}/>
      </Route>
    </Routes>
    </HashRouter>
    </HelmetProvider>
  </StrictMode>
)
