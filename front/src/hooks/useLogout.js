import { useAuthContext } from "./useAuthContext"
import { useWorkContext } from "./useWorkContext"

export const useLogout = () => {
    
    const { dispatch } = useAuthContext()
    const { dispatch: worksd } = useWorkContext()
    
    
    const logout = () => {
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
        worksd({type: 'SET_WORK', payload: null})
    }

    return {logout}
}