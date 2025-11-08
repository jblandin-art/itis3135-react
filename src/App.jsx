import { useState } from 'react'
import { Helmet } from "react-helmet-async";

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <> {/* These are called fragments */}
    <Helmet>
    <title>ITIS3135 | Josiah Blanding's | Jagged Bat | Home</title> 
    </Helmet>
    <main>
      <h2>Home</h2>
            <p>Welcome. This is my ITIS3135 site for Fall 2025. I've worked very hard to learn the basics of HTML and am working on the CSS.
                Please have a look around and let me know what you think!
            </p>
    </main> 
    </>
  )
}
