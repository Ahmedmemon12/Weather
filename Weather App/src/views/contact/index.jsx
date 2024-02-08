import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className='form'>
        <h3>Contact Me</h3>
        <input type="text" placeholder='Fullname'/>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Subject'/>
        <textarea type="text" placeholder='enter Comments'/>
        <button className='btn btn-primary' type="Submit">Submit</button>
      </div>
    </div>
  )
}
