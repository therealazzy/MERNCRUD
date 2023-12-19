import { Link } from "react-router-dom"
import {useLogout} from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

const Header = () => {

    const {logout} = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {

        logout()

    }


    return(
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Worklode</h1>
                </Link>
                <nav>
                    {user && (
                        <div>
                            <span>{user.email}</span>
                        <button onClick={handleClick}>Log out</button>
                        </div>
                            )}
                    {!user && (        
                    <div>
                        <Link to='/login'>Log in</Link>
                        <Link to='/signup'>Sign up</Link>
                    </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header