import { createContext, useReducer } from 'react'

export const WorkContext = createContext()

export const worksReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORK':
            return {
                works: action.payload
            }
        case 'CREATE_WORK':
            return {
                works: [action.payload, ...state.works]
            }
        case 'DELETE_WORK':
            return {
                works: state.works.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }

}

export const WorkContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(worksReducer, {
        works: null
    })

    


    return (
        <WorkContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkContext.Provider>
    )
}
