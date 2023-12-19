import { useWorkContext } from "../hooks/useWorkContext"
import { useAuthContext } from "../hooks/useAuthContext"


//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkDetails = ({work}) => {
    const { dispatch } = useWorkContext()
    const { user } = useAuthContext()



    const handleClick = async() => {

        if (!user){
            return
        }
        const response = await fetch('/api/works/' + work._id, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            },
            method: 'DELETE'
        })

        const json= await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_WORK', payload: json})
        }
    }

 return (
    <div className="work-details">
        <h4>{work.title}</h4>
        <p><strong>Load (mins): </strong>{work.load}</p>
        <p>{formatDistanceToNow(new Date(work.createdAt), {addSuffix: true})}</p>
        <span className = "material-symbols-outlined" onClick={handleClick}>Delete</span>
    </div>
 )
}

export default WorkDetails