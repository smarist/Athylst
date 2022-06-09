import React, {useContext} from "react"
import Filter from "./Components/Filter";
import {Routes, Route} from "react-router-dom"
import { Context } from "./Context";

function App() {
  const {theme} = useContext(Context)
  return (
    <div className="app">
      <Filter/>
        
    </div>
  );
}

export default App;


/*
<Routes>
     <Route path="/"  exact element={<Main/>}/>
            <Route exact path="/:name" element={<CountryDetails/>}/>       
        </Routes> 

            */