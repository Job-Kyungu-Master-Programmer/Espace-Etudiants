import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';
import Notes from './components/Notes';
import Note from './components/Note';
import User from './components/User';
import { Route, Routes, useMatch, useNavigate } from 'react-router-dom';
import Login from './auth/Login';
import Base from './Api/Base';
import Register from './auth/Register';
import { Navigate } from 'react-router-dom'; 


const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState(null);
  const [warning, setWarning] = useState(null);
  const [password, setPassword] = useState('')
  const [mail, setMail] = useState('')
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null)

  const navigate = useNavigate() // Pour la redirection au Home ou ailleur

  useEffect(() => {
    Base.getAll().then(result => {
      setNotes(result);
    });
  }, []);

  useEffect(() => {
    Base.getUsers().then(result => {
      setUsers(result);
    });
  }, []);

  const match = useMatch('/users/:id')
  const userFilter = match
    ? users.find(note => note.id === match.params.id)
    : null

  const matchs = useMatch('/notes/:id')
  const note = matchs ? notes.find(note => note.id === matchs.params.id) : null

  const addNote = (e) => {
    e.preventDefault();

    if (notes.find(note => note.title === title)) {
      setWarning(` ${title} ce sujet fut deja creer par quelqu'un d'autre, publier un autre sujet ! `);
      setTimeout(() => {
        setWarning(null);
      }, 4000);
    } else {
      let dates = new Date();
      const newObject = {
        title: title,
        content: content,
        important: Math.random() < 0.5,
        day: dates.getDate(),
        month: dates.getMonth() + 1,
        years: dates.getFullYear()
      };
      Base.createNote(newObject)
        .then(result => {
          setNotes(notes.concat(result));
          setTitle('');
          setContent('');
          setMessage('Tu viens de creer un article ');
          setTimeout(() => {
            setMessage(null);
          }, 2000);
        }).catch (erro => {
          setWarning(` Vous devrez d'abord vous connecter `);
          setTimeout(() => {
            setWarning(null);
          }, 4000);
        })
    }
  };

  useEffect(() => {
     const loggedUser = window.localStorage.getItem('userIn')
     if(loggedUser) {
        const user = JSON.parse(loggedUser)
        setUser(user)
        Base.setToken(user.token)
     }
  },[])

  const addLogin = async (e) => {
    e.preventDefault()

    try {
      const user = await Base.login({
         mail, password
      })
      window.localStorage.setItem('userIn', JSON.stringify(user))
      setUser(user)
      Base.setToken(user.token)
      navigate('/')
    } catch (exception) {
      setWarning(' Login n\'existe pas ou incorrect !')
      setTimeout(() => {
         setWarning(null)
      }, 3000)
    }
  }


  //Logout user 
  const logout = () => {
     window.localStorage.removeItem('userIn')
     setUser(null)
     Base.setToken(null)
  }

  return (
    <div className="app">
      <Header user={user} logout={logout} />
      <Routes>
        <Route path='/users/:id' element={<User users={users} setUsers={setUsers} userFilter={userFilter} />} />
        <Route path='/notes/:id' element={<Note note={note} />} />
        <Route path='/notes' element={<Notes notes={notes} setNotes={setNotes} addNote={addNote} title={title} content={content} setTitle={setTitle} setContent={setContent} warning={warning} message={message} />} />
        <Route path='/users' element={user ? <Users users={users} /> : 
         <Navigate replace to="/login" />} />
        <Route path='/login' element={<Login warning={warning} addLogin={addLogin} mail={mail} setMail={setMail} setPassword={setPassword} password={password} />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
