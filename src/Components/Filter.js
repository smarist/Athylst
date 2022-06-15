import React, {useContext} from "react"
import {Context} from "../Context"
import {Link} from "react-router-dom"

export default function Filter() {
  const {formData, setFormData} = useContext(Context)

  console.log(formData.marchType)
  return (
    <div>
      <div className="pt">
        <select 
        value={formData.marchType}
        onChange={(e)=> setFormData(prevFormData => {
          return {
          ...prevFormData,
          marchType: e.target.value
          }
      })
      }
        placeholder= "March Type"
        >
            <option value="" disabled hidden className="first">March Type</option>
            <option value="friendly">Friendly</option>
            <option value="tournament">Tournament</option>
        </select>
      </div>


      <div className="filter-btn">
        <Link to="/general"> <button className="btn" disabled={!formData.marchType}>Next</button></Link>
       
      </div>
    </div>
  )
}
