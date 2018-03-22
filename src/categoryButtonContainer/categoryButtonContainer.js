import React from 'react';
import Button from '../Button/Button'
import './cat-btn-container.css'

const categoryButtonContainer = (props) => {

  const categoryButtons = props.categories.map((category, index) => (
    <Button controlFunc={props.controlFunc}
            secondFunc={props.secondFunc}
            name={category}
            id={'category-button'}
            key={index}/>))


  return (
    <div className="buttons-container">
      {categoryButtons}
    </div>
  )
}




export default categoryButtonContainer;
