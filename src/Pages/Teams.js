import React from 'react'

export default function Teams() {
  return (
    <div>
        <header>
          <div className='btn'>Teams 3/3</div>
        </header>
        <form>
            <div>
                <input 
                    type="text" 
                    placeholder="Email address"
                    className="form--input"
                    name= "email"
                />

                <select
                >
                    <option value="" disabled hidden>Home or Away</option>
                    <option value="friendly">Home</option>
                    <option value="tournament">Away</option>
                </select>
            </div>
            

            <div>
                <input 
                    type="text" 
                    placeholder="Email address"
                    className="form--input"
                    name= "email"
                />

                <select
                >
                    <option value="" disabled hidden>Home or Away</option>
                    <option value="friendly">Home</option>
                    <option value="tournament">Away</option>
                </select>
            </div>

            
            <div>
                <button 
                className="btn"> Back
                </button>
                <button 
                className="btn"> Submit
                </button>
            </div>
        </form>
    </div>
  )
}
