import React from 'react'
import data from '../../helpers/data'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cards-container'>
        {data.map((card)=> {
           return <div key={card.id}>
            <div className="card">
                <h1>{card.title}</h1>
                <img src={card.image} alt={card.title} />
                <p className='card-desc'>{card.desc}</p>
            </div>
        </div>
        })}
    </div>
  )
}

export default Cards