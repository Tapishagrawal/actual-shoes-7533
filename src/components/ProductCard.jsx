import React from 'react'

export const ProductCard = ({title,image}) => {

  return (
    <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
    </div>
  )
}
