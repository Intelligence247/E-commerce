import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './Component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
           <div className="wrapper">
            <Header/>
           </div>
    </div>
  )
}

export default App
