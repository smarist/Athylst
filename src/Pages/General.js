import React, {useContext} from "react"
import Form1a from '../Components/Form1a'
import Form1b from '../Components/Form1b'
import {Context} from "../Context"


export default function General () {
    const {formData} = useContext(Context)

  return (
    <div>
        {formData.marchType === "friendly"? 
         <Form1a/> :
         <Form1b/>
        }
    </div>
  )
}
