import { useState } from "react"
import { useSignup } from "../hooks/useSignup"


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e) =>{

    e.preventDefault()
    
    await signup(email, password)
    }



    return(
        <section>
            <div>
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>


            <input 
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>

            <input 
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}/>

            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
        </div>
        </section>
    )
}

export default SignUp