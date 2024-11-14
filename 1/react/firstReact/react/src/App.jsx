import { useState } from 'react'

// import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Login from './components/Login'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
    <Router>
       
        <Header></Header>
        <Content></Content>
    </Router>
  
    </>
  )
}

export default App
