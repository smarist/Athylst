import React, {useState} from "react"


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
 
    
    return (
        <Context.Provider 
        value={{marchType, setMarchType, formData, setFormData}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
