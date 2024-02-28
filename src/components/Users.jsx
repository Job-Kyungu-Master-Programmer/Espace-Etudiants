import React from 'react';
import Table from '@mui/joy/Table';
import LaunchIcon from '@mui/icons-material/Launch'; // Assurez-vous que c'est le nom correct de l'icône
import { Link } from 'react-router-dom';
import LinkIcon from '@mui/icons-material/Link';
import { Button } from '@mui/material';

const Users = ({ users }) => {
  return (
    <div className="users">
      <h1 className="users__title">Liste des etudiants</h1>
      <Table aria-label="basic table">
        <thead>
          <tr>
            <th style={{ width: '40%' }}>ID etudiant</th>
            <th>Nom et Post-nom</th>
            <th>Faculter de l'etudiant</th>
            <th>Niveau </th>
            <th>Profil Etudiant </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>   
            <tr key={user.id}>
              <td>{ user.id }</td>
              <td>{ user.name } - { user.lastName }</td>
              <td>{ user.faculty }</td>
              <td> { user.level } annee</td>
              <td>   
                <Link to={`/users/${user.id}`} className="users__see">
                  <Button variant='contained'>
                    <LaunchIcon /> {/* Utilisation de l'icône */}
                    <LinkIcon /> <span>Voir son profil</span>
                  </Button>
                </Link>   
              </td>
            </tr>   
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Users;
