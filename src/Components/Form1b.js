import React, {useContext} from "react"
import {Context} from "../Context"
import {Link} from 'react-router-dom'
import Date from './Date'


export default function Form1b() {
    const {formData, setFormData, errors, setErrors} = useContext(Context)

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
    
    console.log(formData)

  return (
    <div>
        <header>
          <div className='btn'>General 2/3</div>
        </header>
        <form className="flex-col p">
            <div className="flex-row md">
                <div className="flex-col form-div max p">
                    <Date
                        placeholder={"Start Date & Time"}
                        name= "startDateAndTime"
                        value= {formData.startDateAndTime}
                        onChange={handleChange}
                        className="width"
                    />

                    <input 
                        type="text" 
                        placeholder="March Location"
                        className="block width"
                        name= "matchLocation"
                        value= {formData.matchLoaction}
                        onChange={handleChange}
                />

                    <input 
                        type="text" 
                        placeholder="Tournament Name"
                        className="block width"
                        name= "tournamentName"
                        value= {formData.tournamentName}
                        onChange={handleChange}
                    />
                    
                </div>

                <div className="flex-col form-div p">
                    <Date
                        placeholder={"End Date & Time"}
                        name= "endDateAndTime"
                        value= {formData.endDateAndTime}
                        onChange={handleChange}
                        className="width"
                    />

                    <textarea
                        placeholder="comments"
                        name= "comments"
                        value= {formData.comments}
                        onChange={handleChange}
                        className="width block comments"
                        maxLength={1000}
                    />
                    
                </div>

            </div>

            <div className="filter-btn1">
            <Link to = "/">
                <button 
                className="btn"> Back
                </button>
            </Link>

            <Link to = "/teams">
                <button 
                className="btn"> Next
                </button>
            </Link>
            </div>
        </form>
    </div>
  )
}
