import React from 'react';
import './Card.css'


const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.info.name}</h1>
      <h5>Homeworld: {props.info.homeworld}</h5>
      <h5>Species: {props.info.species}</h5>
      <h5>Lanuage: {props.info.language}</h5>
      <h5>Population: {props.info.population}</h5>
    </div>
  )
}

export default Card;
