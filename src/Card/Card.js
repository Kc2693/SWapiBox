import React from 'react';
import './Card.css'


const Card = (props) => {

  const keys = Object.keys(props.info);

  const displayContents = keys.map((key, index) => {
    if (key !== "name") {
      return <h5 key={index}>{key}: {props.info[key]}</h5>
    }
  });

  return (
    <div className="card">
      <button className="fave-btn"></button>
      <h1>{props.info.name}</h1>
      {displayContents}
    </div>
  )
}

export default Card;
