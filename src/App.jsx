import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <> {/* These are called fragments */}
    <Header />
    <main>
      <h2>
        Welcome to my first Alpha page.
      </h2>
      <p>

      </p>
    </main>
    <footer>
      <p>Designed by Josiah</p>
    </footer>
    
    </>
  )
}
