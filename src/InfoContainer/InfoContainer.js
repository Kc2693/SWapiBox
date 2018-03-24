import React from 'react';
import Card from '../Card/Card'
import './Info-Container.css';


const InfoContainer = (props) => {
  const displayCards = props.categoryInfo.map((item, index) => {
    return <Card info={item} key={index}/>
  })

  return (
    <div className="info-container">
      {displayCards}
    </div>
  )

}

export default InfoContainer;
