import React, {useContext} from "react"
import {Context} from "../Context"
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField'

export default function Form1b() {
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
            <div className="flex-row md">
                <div className="flex-col form-div max p">
                    
                    <TextField
                        className="width"
                        id="datetime-local"
                        label={"Start Date & Time"}
                        name= "startDateAndTime"
                        type="datetime-local"
                        value={formData.startDateAndTime}
                        onChange={(e) => setFormData(prevFormData => {
                            return {
                            ...prevFormData,
                            startDateAndTime: e.target.value
                            }
                        })
                        }
                        sx={{ width: 250 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
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
                    <TextField
                            className="width"
                            id="datetime-local"
                            label={"End Date & Time"}
                            name= "endDateAndTime"
                            type="datetime-local"
                            value={formData.endDateAndTime}
                            onChange={(e) => setFormData(prevFormData => {
                                return {
                                ...prevFormData,
                                endDateAndTime: e.target.value
                                }
                            })
                            }
                            sx={{ width: 250 }}
                            InputLabelProps={{
                            shrink: true,
                            }}
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
        </div>
    </div>
  )
}
