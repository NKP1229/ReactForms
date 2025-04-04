import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUpForm.jsx'
import Authenticate from './components/Authenticate.jsx'
function App() {
  const [token,setToken] = useState(null);
  return (
    <>
      <Authenticate token={token} setToken={setToken}/>
      <SignUp token={token} setToken={setToken}/>
    </>
  )
}

export default App
