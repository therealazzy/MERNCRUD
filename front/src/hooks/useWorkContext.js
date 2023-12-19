import { WorkContext } from "../context/WorkContext"
import { useContext} from "react"

export const useWorkContext = () => {
    const context = useContext(WorkContext)

    if (!context){
        throw Error("WorkContext must be used within scope")
    }

    return context
}