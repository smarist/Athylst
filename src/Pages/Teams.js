import React from 'react'

export default function Teams() {
  return (
    <div>
        <header>
          <div className='btn'>Teams 3/3</div>
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
