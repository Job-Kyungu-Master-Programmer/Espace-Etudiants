import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import us from '../images/free.jpg'
import { Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import Base from '../Api/Base';


const Notes = ( { addNote, title, setTitle, content, setContent,message, notes, setNotes, warning} ) => {
    
    const onDelete = (id) => {
        const noteId = notes.filter(note => note.id !== id)
        Base.delet(id, noteId).then(result => {
            setNotes(notes.map(note => note.id !== id ? note : result))
            setNotes(notes.filter(note => note.id !== id))
        })
    }

    const importance = (id) => {
        const noteId = notes.find(note => note.id === id)
        const noteChange = {
            ...noteId, important: !noteId.important
        }
        Base.updateNote(id, noteChange).then(result => {
            setNotes(notes.map(note => note.id !== id ? note : result))
        })
    }

    return (
        <div className="notes">
            <Alert className='notes__alert' 
              severity="success">This is a success Alert.</Alert>
             <h1 className="notes__title">Notes Etudiants</h1>
             <ButtonGroup 
                className='notes__btns'
                variant="outlined" aria-label="Basic button group">
                <Button>Passe des classe</Button>
                <Button>Reprends l'annee</Button>
            </ButtonGroup>
             <Container className='notes__container'>
                {notes.map(note => 
                     <Card className='notes__Card' key={note.id}>
                     <CardMedia
                         sx={{ height: 140 }}
                         image={us}
                         title="green iguana"
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                           { note.title }
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                            { note.content }
                         </Typography>
                     </CardContent>
                     <CardActions>
                         <Button className='notes__delete'
                          onClick={() => onDelete(note.id)}
                          variant="contained" startIcon={<DeleteIcon />}>
                              Delete
                         </Button>
                         <Button
                          onClick={() => importance(note.id)}
                          variant=
                            {note.important ? "contained"
                                            : "outlined"
                            }
                           >
                             {note.important ? 'Mis a jour' : 'Sujet Expirer'}
                         </Button>
                     </CardActions>
                     </Card>    
                )}   
             </Container>
             <form onSubmit={addNote} 
             className="notes__form">
                { message &&  
                  <Alert variant="filled" severity="success">
                    { message }
                  </Alert>
                }
                { warning &&  
                  <Alert variant="filled" severity="warning">
                    { warning }
                  </Alert>
                }
                <h1 className="notes__form__title">Ajouter un memo</h1>
                <TextField className='notes__input'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                 id="outlined-basic" label="Votre titre" variant="outlined" />
                <TextField className='notes__input'
                id="outlined-multiline-flexible"
                label="Votre Memo..."
                multiline
                maxRows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                />
                <Button
                  type='submit'
                  className='notes__send'
                  variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
             </form>
         </div>
      );
}

export default Notes