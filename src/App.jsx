import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Redux {count}</h2>
      <button onClick={()=>setCount(count + 1)}>Click me</button>
    </>
  )
}

export default App
