import React from "react";
import { TextField, Button } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import Base from "../Api/Base";
import { useNavigate } from 'react-router-dom'

import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


const Register = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [profession, setProfession] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [level, setLevel] = useState('')
    const [age, setAge] = useState('')
    const [faculty, setFaculty] = useState('')

    const [load, setLoad] = useState(null)

    // useNavigate
    const navigate = useNavigate()

    const addUser = (e) => {
         e.preventDefault()
        if(users.find(user => user.mail === mail)) {
            alert('User existing')
        } else {
            const userObject = {
                name: name,
                lastName: lastName,
                profession: profession,
                mail: mail,
                like: 0,
                password: password,
                level: level,
                age: age,
                faculty: faculty
            }
            Base.createUser(userObject).then(result => {
                setUsers(users.concat(result))
                setLoad(`Bienvenu(e) ${name}`)
                setTimeout(() => {
                    navigate('/login')
                }, 10000)
            })
        }
    }

    return (
        <div className="login">
            <div className="login__container">
                <form onSubmit={addUser} 
                className="login__form">
                    { load &&  <Box sx={{ width: '100%' }} >
                        <LinearProgress  />
                    </Box> }
                    <h1 className="login__title">Inscriptions</h1>
                    <TextField className='notes__input'
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                    id="outlined-basic" label="Votre nom" variant="outlined" />
                     <TextField className='notes__input'
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                    id="outlined-basic" label="Votre post-nom" variant="outlined" />
                     <TextField className='notes__input'
                     value={profession}
                     onChange={(e) => setProfession(e.target.value)}
                    id="outlined-basic" label="Votre profession" variant="outlined" />
                     <TextField className='notes__input'
                     value={faculty}
                     onChange={(e) => setFaculty(e.target.value)}
                    id="outlined-basic" label="Votre faculte" variant="outlined" />
                     <TextField className='notes__input'
                     value={level}
                     onChange={(e) => setLevel(e.target.value)}
                    id="outlined-basic" label="Votre niveau L1 ?" variant="outlined" />
                    <TextField className='notes__input'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    id="outlined-basic" label="Votre Age" variant="outlined" />
                    <TextField className='notes__input'
                    value={mail}
                     onChange={(e) => setMail(e.target.value)}
                    id="outlined-basic" label="Votre E-mail" variant="outlined" />
                    <TextField className='notes__input'
                    value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    id="outlined-basic" label="Votre Mot de Passe" variant="outlined" />
                    <Button type='submit'
                    className='notes__send login__send'
                    variant="contained">
                        Enregistrez-vous
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Register