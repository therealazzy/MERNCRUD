import {useState} from 'react'
import { useWorkContext } from '../hooks/useWorkContext'
import { useAuthContext } from '../hooks/useAuthContext'

const Workform = ()  => {
    const { dispatch } = useWorkContext()
    const { user } = useAuthContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        
        e.preventDefault()

            if (!user){
                setError('you must be logged in')
                return
        }

        const work = {title, load}

        const response = await fetch('/api/works/', {
            method: 'POST',
            body: JSON.stringify(work),
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setTitle('')
            setLoad('')
            setError(null)
            setEmptyFields([])
            console.log('new work added successfully', json)
            dispatch({type: 'CREATE_WORK', payload: json})
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add Work</h3>

            <label>Title:</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}/>

            <label>Load:</label>
            <input
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            className={emptyFields.includes('load') ? 'error' : ''}/>
            <button>Add</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Workform