import { useEffect} from "react"
import { useWorkContext } from "../hooks/useWorkContext"
import { useAuthContext } from "../hooks/useAuthContext"

import WorkDetails from '../components/WorkDetails'
import Workform from '../components/Workform'



const Home = () =>{

    const {works, dispatch} = useWorkContext()
    const { user } =useAuthContext()

    useEffect(() => {
        const fetchWorks = async () => {
            const response = await fetch('/api/works', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
               dispatch({type: "SET_WORK", payload: json})
            }
        }

            if (user){
                fetchWorks()
            }
    }, [dispatch, user])

return(
    <div className="home">
        <div className="works">
            {works && works.map((work) => (
                <WorkDetails key={work._id} work ={work}/>
            ))}
        </div>

        <Workform/>
    </div>
)
}

export default Home