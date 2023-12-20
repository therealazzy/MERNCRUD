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



    return (
      <div>
        <section>
          <div>
            <form className="signup" onSubmit={handleSubmit}>
              <h3>Sign up</h3>

              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <button disabled={isLoading}>Sign up</button>
            </form>
          </div>
        </section>
        {error && <div className="error">{error}</div>}
      </div>
    );
}

export default SignUp