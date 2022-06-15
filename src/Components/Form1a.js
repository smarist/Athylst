import React, {useContext} from "react"
import {Context} from "../Context"
import Date from './Date'
import {Link} from 'react-router-dom'
import moment from "moment"



export default function Form1a() {
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

    

    
    console.log(formData)
  return (
    <div>
        <header>
          <div className='btn'>General 2/3</div>
        </header>
        <div className="flex-col p">
            <div className="flex-row form-div md">
                <div className="flex-col max p">

                    <Date
                            placeholder={"Start Date & Time"}
                            name= "startDateAndTime"
                            value= {formData.startDateAndTime}
                            onChange={(e) => setFormData(prevFormData => {
                                return {
                                ...prevFormData,
                                startDateAndTime: moment(new Date(e.target.value)).format("YYYY-MM-DD")
                                }
                            })
                            }
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

                </div>
            
                <div className="flex-col form-div p">
                    <Date
                        placeholder={"End Date & Time"}
                        name= "endDateAndTime"
                        value= {formData.endDateAndTime}
                        onChange={(e) => setFormData(prevFormData => {
                            return {
                            ...prevFormData,
                            endDateAndTime: moment(new Date(e.target.value)).format("YYYY-MM-DD")
                            }
                        })
                        }
                        className="width"
                    />    
                        
                    <textarea
                        placeholder="comments"
                        name= "comments"
                        value= {formData.comments}
                        onChange={handleChange}
                        className="width comments block"
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
        </div>
    </div>
  )
}

/*
<TextField
                        id="datetime-local"
                        type="date"
                        label={"Start Date & Time"}
                        name= {"startDateAndTime"}
                        value={startDate}
                        onChange={handleChange}
                        sx={{ width: 250 }}
                        InputLabelProps={{
                        shrink: true,
                    }}


                    <Date
                        
                    />

                    <Date
                        placeholder={"End Date & Time"}
                        name= {"endDateAndTime"}
                        value= {formData.endDateAndTime}
                        onChange={handleChange}
                        className="width"
                    />


                    */