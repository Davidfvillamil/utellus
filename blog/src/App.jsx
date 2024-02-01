import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './components/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayout></MainLayout>
      <h1 className='text-red-500'>Hello world</h1>
    </>
  )
}

export default App
