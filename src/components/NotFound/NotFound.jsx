import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div>
    <h1>404 - Not Found!</h1>
    <Link to="/" style={{alignItems:'center',margin:'40px'}}>Go Home</Link>
  </div>
  )
}

export default NotFound