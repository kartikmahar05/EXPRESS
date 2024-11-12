import React from 'react'

const Ecom = (props) => {
  return (
    <div className='proj'>
        <img src={props.image} style={{height:"150px",width:"200px"}} />
        <h1>{props.title}</h1>
        <h1>{props.description}</h1>
        <h1>{props.price}</h1>
    </div>
  )
}

export default Ecom