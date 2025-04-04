import {useState} from 'react'
export default function SignUp({token,setToken}) {
  const [user, setUser] = useState("");
  const [pass,setPass] = useState("");
  const [error,setError] = useState(null);
  const [resultMsg, setResultMsg] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    // console.log("Hello");
    {!user && setResultMsg(`Username Required!`)}
    {!pass && setResultMsg(`Password Required!`)}
    {if(user && pass && !error){
        try{
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
                { 
                  method: "POST", 
                  headers: { 
                    "Content-Type": "application/json" 
                  }, 
                  body: JSON.stringify({ 
                    username: {user}, 
                    password: {pass},
                  }) 
                }
            )
            const result = await response.json();
            setToken(result.token);
            console.log(result);
            setResultMsg(result.message);
    
        }
        catch(error){
            console.error(error.message);
            setError(error.message);
        }
    }}
  }
  const checkPassword = (e) => {
    const Password = e.target.value;
    setPass(Password);
    const validation = validatePass(Password);
    setError(validation);
  };
  const validatePass = (password) => {
    const minLength = 8;
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(){}:"<>?,.|]/.test(password);
    if(password.length < minLength){
        return "Password must be at least 8 characters long."
    }
    else if(!upperCase){
        return "Password must have at least 1 upper case letter."
    }
    else if(!lowerCase){
        return "Password must have at least 1 lower case letter."
    }
    else if(!hasNumbers){
        return "Password must have at least one number."
    }
    else if(!hasSpecial){
        return "Password must have at least one special character."
    }
    return "";
  }
  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
            <label>
                Username: 
                <input type="email" value={user} placeholder="email@email.com" onChange={(e) => setUser(e.target.value)}/>
            </label>
        </div>
        <div>
            <label>
                Password: 
                <input type="password" value={pass} onChange={checkPassword}/>
            </label>
        </div>
        <button>Submit</button>
      </form>
      <div>
        {resultMsg && <p>{resultMsg}</p>}
      </div>
    </>
  )
}
