import React from 'react'

export default function ListItem({shoes}) {
  return (
  
      <div className="col-md-4">
      <img src={shoes.img} width="80%" />
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
      </div>
  
  )
}
