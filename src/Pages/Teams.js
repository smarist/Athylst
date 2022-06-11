import React, {useContext} from "react"
import {Context} from "../Context"
import {Link} from "react-router-dom"


export default function Teams() {

    const {formData, setFormData} = useContext(Context)


    function handleChange(e){
        const {name, value} = e.target
      
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            [name]: value
          }
        }
        )
    }

    
  return (
    <div>
        <header>
          <div className='btn'>Teams 3/3</div>
        </header>
        <form className="flex-col">
            <div className="flex-row box1">
                <input 
                    type="text" 
                    placeholder="Team one name"
                    className="form--input"
                    name= "teamOneName"
                    value={formData.teamOneName}
                    onChange={handleChange}
                />

                <select
                   name="teamOnePosition"
                   value={formData.teamOnePosition}
                   onChange={handleChange}
                   className="teams"
                >
                    <option value="" disabled hidden>Home or Away</option>
                    <option value="Home" disabled={formData.teamTwoPosition === "Home"}>Home</option>
                    <option value="Away" disabled={formData.teamTwoPosition === "Away"}>Away</option>
                </select>
            </div>

            <div className="line">
                <div className="left">

                </div>
                <div className="vs">
                    VS
                </div>

                <div className="right">

                </div>
            </div>
            

            <div className="flex-row box2">
                <input 
                    type="text" 
                    placeholder="Team two name"
                    className="form--input"
                    name= "teamTwoName"
                    value={ formData.teamTwoName}
                    onChange={handleChange}
                />

                <select
                 name= "teamTwoPosition"
                 value={formData.teamTwoPosition}
                 onChange={handleChange}
                 className="teams"
                >
                    <option value="" disabled hidden>Home or Away</option>
                    <option value="Home" disabled={formData.teamOnePosition === "Home"}>Home</option>
                    <option value="Away" disabled={formData.teamOnePosition === "Away"}>Away</option>
                </select>
            </div>

            <div className="filter-btn1 mt">
            <Link to = "/general">
                <button 
                className="btn"> Back
                </button>
            </Link>

            <Link to = "/data">
                <button 
                className="btn"> Submit
                </button>
            </Link>
            </div>
        </form>
    </div>
  )
}
