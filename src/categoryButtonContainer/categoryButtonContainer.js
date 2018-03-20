import React from 'react';
import Button from '../Button/Button'

const categoryButtonContainer = (props) => {

  const categoryButtons = props.categories.map((category, index) => (
    <Button controlFunc={props.controlFunc}
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
