import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Offers on your Email</h1>
      <p>Subscribe to the newsletter</p>
      <div>
        <input type="email" placeholder='Your Email here' />
      <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
