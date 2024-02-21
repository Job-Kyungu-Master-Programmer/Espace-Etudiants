
import axios from 'axios'

const urlNotes = 'http://localhost:3001/notes'
const urlUsers = 'http://localhost:3001/users'


// Traitons les Note 
const getAll = () => {
    const request = axios.get(urlNotes)
    return request.then(response => response.data)
}

const createNote =  newObject  => {
    const request = axios.post(urlNotes, newObject)
        return request.then(response => response.data)
}

const delet = ( id,newObject ) => {
    const request = axios.delete(`${urlNotes}/${id}`, newObject)
        return request.then(response => response.data)
}

const updateNote = ( id,newObject ) => {
    const request = axios.put(`${urlNotes}/${id}`, newObject)
        return request.then(response => response.data)
}



// Traitons les Users
const getUsers = () => {
    const request = axios.get(urlUsers)
        return request.then(response => response.data)
}

const createUser = newObject => {
    const request = axios.post(urlUsers, newObject)
        return request.then(response => response.data)
}





export default {
    getAll,
    createNote,
    delet,
    updateNote,

    //User
    getUsers,
    createUser
}