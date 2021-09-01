import './Card.css'
import React from 'react'

export default props => 
   <div className="Card">
      <div className="Base">
         <div className="Head">
            {props.titulo}
         </div>
         <div className="Content">
            {props.children}
         </div>
      </div>
   </div>