import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="min-h-screen flex flex-col">
        <Header />
          <main className="flex-grow">
            <About />
          </main>
        <Footer />
      </div>
  )
}

export default App
