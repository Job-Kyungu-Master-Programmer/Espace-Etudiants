import React from 'react'

const Note = ( { note } ) => {
  return (
   <div className="note">
        <div className="note__card">
            <h1 className="note__title"> { note.title } </h1>
            <span className="note__date"> {note.day} - {note.month} - {note.years}</span>
            <div className="note__author">Auteur : <strong className="note__str">
                Jeancy dALOS    
            </strong></div>
            <div className="note__content">
                {note.content}
            </div>
        </div>
   </div>
  )
}

export default Note