import React from "react"
import Types from "./Pages/Types";
import General from "./Pages/General";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Routes>
          <Route path="/"  exact element={<General/>}/>  
          <Route path="form1"/>    
        </Routes>   
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