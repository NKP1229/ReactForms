import {useState} from 'react'
export default function SignUp() {
  const [user, setUser] = useState("");
  const [pass,setPass] = useState("");
  const [error,setError] = useState(null);
  return (
    <>
      <h2>Sign Up</h2>
      <form>
        <label>Username: <input/></label>
        <label>Password: <input/></label>
        <button>Submit</button>
      </form>
    </>
  )
}
