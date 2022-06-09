import React, {useEffect, useState} from "react"


const Context = React.createContext()

function ContextProvider({children}) {
    const [theme, setTheme] = React.useState(false)
    const [marchType, setMarchType] = useState("")



    function chooseTheme(){
        setTheme(prevTheme => !prevTheme)
    }
    
    return (
        <Context.Provider 
        value={{theme, chooseTheme, marchType, setMarchType}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
