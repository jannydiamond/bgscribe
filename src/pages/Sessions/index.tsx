import React from 'react'
import { Link } from 'react-router-dom'

const Sessions = () => {
  return (
    <div>
      <Link to="/">Back</Link>
      Sessions
    </div>
  )
}

export default React.memo(Sessions)
