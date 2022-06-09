import React, {useContext} from "react"
import {Context} from "../Context"
import {Link} from "react-router-dom"

export default function Filter() {
  const {marchType, setMarchType} = useContext(Context)

  console.log(marchType)
  return (
    <div>
      <div className="pt">
        <select 
        value={marchType}
        onChange={(e)=> setMarchType(e.target.value)}
        placeholder= "March Type"
        >
            <option value="" disabled hidden>March Type</option>
            <option value="friendly">Friendly</option>
            <option value="tournament">Tournament</option>
        </select>
      </div>


      <div className="filter-btn">
        <Link to="#"> <button className="btn" disabled={!marchType}>Next</button></Link>
       
      </div>
    </div>
  )
}
