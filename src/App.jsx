import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'


function App() {

  return (
      <div className="min-h-screen flex flex-col bg-[#242424]">
        <Header />
          <main className="flex-grow">
            <About/ >
          </main>
        <Footer />
      </div>
  )
}

export default App
