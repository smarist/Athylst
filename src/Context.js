import React, {useState} from "react"


const Context = React.createContext()

function ContextProvider({children}) {
    const [formData, setFormData] = useState({
        marchType: "",
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
        value={{formData, setFormData}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
