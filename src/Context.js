import React, {useState} from "react"


const Context = React.createContext()

function ContextProvider({children}) {
    const [marchType, setMarchType] = useState("")



    
    
    return (
        <Context.Provider 
        value={{marchType, setMarchType}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
