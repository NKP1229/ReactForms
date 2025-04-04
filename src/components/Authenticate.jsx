import {useState} from 'react'
export default function Authenticate({token}) {
    const [successMsg, setSuccessMsg] = useState(null);
    const [error,setError] = useState(null);
    async function handleClick() {
        try{
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    }   
                }
            );
            const result = await response.json();
            setSuccessMsg(result.message);
        }
        catch(error){
            setError(error.message);
        }
    }
    return (
      <div>
        <h2>Authenticate</h2>
        {successMsg && <p>{successMsg}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
      </div>
    )
  }