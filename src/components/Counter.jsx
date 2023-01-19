import React from 'react'

const Counter = ({title, number}) => {
  
  return (
    <div>
      <p>{number}</p>
      <h3>{title}</h3>
    </div>
  )
}

export default Counter