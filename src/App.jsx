import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Users from './components/Users'
import Notes from './components/Notes'
import Note from './components/Note'
import User from './components/User'
import { Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import { useState } from 'react'
import Base from './Api/Base'
import { useEffect } from 'react'
import Register from './auth/Register'
import {useMatch} from 'react-router-dom'


const App = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [message, setMessage] = useState(null)
  const [warning, setWarning] = useState(null)
  const [users, setUsers] = useState([])


  useEffect(() => {
     Base.getAll().then(result => {
         setNotes(result)
     })
  },[])


  useEffect(() => {
     Base.getUsers().then(result => {
         setUsers(result)
     })
  },[])

   const match = useMatch('/users/:id')
   const user = match ? users.find(us => us.id === Number(match.params.id)) : null
   console.log(user)

  const addNote = (e) => {
    e.preventDefault()

    if(notes.find(note => note.title === title)) {
      setWarning(` ${title} ce sujet fut deja creer par quelqu'un d'autre, publier un autre sujet ! `)
      setTimeout((success) => {
         setWarning(null)
      }, 4000)
    } 
    else {
      
      let dates = new Date()
      const newObject = {
         title: title,
         content: content,
         important: Math.random() < 0.5,
         day: dates.getDate(),
         month: dates.getMonth() + 1,
         years: dates.getFullYear()
        }
      Base.createNote(newObject)
      .then(result => {
        setNotes(notes.concat(result))
        setTitle('')
        setContent('')
        setMessage('Tu viens de creer un article ')
         setTimeout((success) => {
            setMessage(null)
         }, 2000)
      })
    }
  }

  return (
    <div className="app">
        <Header />
        <Routes>
            <Route path='/' element={<Home /> } />
            <Route path='/notes' element={<Notes notes={notes} setNotes={setNotes} addNote={addNote} title={title} content={content} setTitle={setTitle} setContent={setContent} warning={warning} message={message} />} />
            <Route path='/users' element={<Users users={users} />} />  
            <Route path='/users/:id' element={<User user={user} />} />
            <Route path='/login' element={<Login />} />  
            <Route path='/signup' element={<Register />} />
        </Routes>      
    </div>
  )
}

export default App