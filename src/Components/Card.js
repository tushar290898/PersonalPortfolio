import React from 'react'
import '../Components/Card.css'

function Card( { image, info, title, code, live}) {
  return (
    <div className='card-section'>
        <img src={image}/>
        <div className='card-info'>
            <h2>{title}</h2>
            <p>{info}</p>
            <div className='button-section'>
                <div className='btn'><a href={code}> CODE</a></div>
                <div className='btn'><a href={live}>LIVE APP</a></div>
            </div>
        </div>
    </div>
  )
}

export default Card