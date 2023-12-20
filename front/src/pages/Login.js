import { useState } from "react"
import {useLogin} from "../hooks/useLogin"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading, error} = useLogin()



    const handleSubmit = async (e) =>{

    e.preventDefault()
    
    await login (email, password)
    }



    return (
      <div className="sect">
        <section>
          <div>
            <form className="login" onSubmit={handleSubmit}>
              <h3>Log in</h3>

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

              <button disabled={isLoading}> Log in </button>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
        </section>
      </div>
    );
}

export default Login