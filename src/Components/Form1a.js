import React from 'react'
import Date from './Date'

export default function Form1a() {
  return (
    <div>
        <header>
          <div className='btn'>General 2/3</div>
        </header>
        <form>
            <div>
                <Date/>

                <Date/>


                
            </div>
            
            <div>
                <input 
                    type="text" 
                    placeholder="Email address"
                    className="form--input"
                    name= "email"
                />

                <input 
                    type="text" 
                    placeholder="Email address"
                    className="form--input"
                    name= "email"
                />
                
                <textarea placeholder='Comments'/>

            </div>

            
    
            <div>
                <button 
                className="btn"> Back
                </button>
                <button 
                className="btn"> Next
                </button>
            </div>
        </form>
    </div>
  )
}
