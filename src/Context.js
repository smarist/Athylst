import React, {useState} from "react"
import moment from 'moment';


const Context = React.createContext()

function ContextProvider({children}) {
    const [marchType, setMarchType] = useState("")
    const [formData, setFormData] = useState({
        startDateAndTime: "",
        endDateAndTime: "",
        matchLocation: "",
        comments: "",
        tournamentName: "",
        teamOnename: "",
        teamTwoname: "",
        teamOnePosition: "",
        teamTwoPosition: ""
        })


    const [dateDate, setDateData] = useState(moment().format('YYYY-MM-DD')) 
    
    return (
        <Context.Provider 
        value={{marchType, setMarchType, formData, setFormData, dateDate, setDateData}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
