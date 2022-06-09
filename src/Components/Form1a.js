import React from 'react'

export default function Form1a() {
  return (
    <div>
        <header>
          <div className='btn'>General 2/3</div>
        </header>
        <form>
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
