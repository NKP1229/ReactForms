import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUpForm.jsx'
import Authenticate from './components/Authenticate.jsx'
function App() {

  return (
    <>
      <Authenticate />
      <SignUp />
    </>
  )
}

export default App
