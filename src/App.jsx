import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Layout from "./Layout.jsx"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <> {/* These are called fragments */}
    <main>
      <h2>Home</h2>
            <p>Welcome. This is my ITIS3135 site for Fall 2025. I've worked very hard to learn the basics of HTML and am working on the CSS.
                Please have a look around and let me know what you think!
            </p>
    </main> 
    </>
  )
}
