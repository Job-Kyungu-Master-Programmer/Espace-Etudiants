import React from 'react'

const Note = () => {
  return (
   <div className="note">
        <div className="note__card">
            <h1 className="note__title">Readmap for english </h1>
            <span className="note__date"> 12 - 05 - 2024</span>
            <div className="note__author">Auteur : <strong className="note__str">
                Jeancy dALOS    
            </strong></div>
            <div className="note__content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, vel numquam sint, nemo ratione illum deleniti at rerum omnis dolore pariatur impedit voluptatem accusantium debitis non. Beatae dicta possimus nemo.
            </div>
        </div>
   </div>
  )
}

export default Note