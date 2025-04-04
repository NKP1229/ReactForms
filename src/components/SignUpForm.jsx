import {useState} from 'react'
export default function SignUp() {
  const [user, setUser] = useState("");
  const [pass,setPass] = useState("");
  const [error,setError] = useState(null);
  
  async function handleSubmit(event) {
    event.preventDefault();
    // console.log("Hello");
    try{
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
            {
                method: "POST",
                body: JSON.stringify(),
            }
        );
        const result = await response.json();
        console.log(result);
    }
    catch(error){
        console.error(error.message);
        setError(error.message);
    }
  }
  
  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
            <label>
                Username: 
                <input value={user} onChange={(e) => setUser(e.target.value)}/>
            </label>
        </div>
        <div>
            <label>
                Password: 
                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
            </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}
