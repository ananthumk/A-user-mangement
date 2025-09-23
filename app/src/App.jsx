import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner'
import Home from './components/Home'
import UserDetails from './components/UserDetails'

function App() {
  

  return (
    <>
      <Banner />
      <Home />
      <UserDetails />
    </>
  )
}

export default App
