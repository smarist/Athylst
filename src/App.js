import React, {useContext} from "react"
import Main from "./Components/Filter";
import {Routes, Route} from "react-router-dom"
import { Context } from "./Context";

function App() {
  const {theme} = useContext(Context)
  return (
    <div className={theme? "app-dark": "app"}>
        <Routes>
            <Route path="/"  exact element={<Main/>}/>
            <Route exact path="/:name" element={<CountryDetails/>}/>
        </Routes> 
    </div>
  );
}

export default App;


