import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Buttons from '@mui/material/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { useParams } from 'react-router-dom';
import us from '../images/user.webp'
import Base from '../Api/Base';


const User = ( { userFilter, users, setUsers } ) => {
  // const follow = (id) => {
  //    const userId = users.find(user => user.id === id)
  //    const userLike = {...userId, like: userId.like + 1}
  //    Base.followers(id, userLike).then(result => {
  //        setUsers(users.map(user => user.id === id ? result : user))
  //    })
  // }
  const follow = (id) => {
    const userId = users.find(user => user.id === id);
    const userLike = {...userId, like: userId.like +  1};
    Base.followers(id, userLike).then(result => {
      // Mettez à jour l'état des utilisateurs avec les données mises à jour
      setUsers(users.map(user => user.id === id ? {...result, notes: user.notes} : user));
    });
  };
  

  return (
    <div className="user">
        <div className="user__container">
             <h1 className="user__title">Information sur l'etudiant </h1>
             <span className="user__id">ID Etudiant : 
                <strong className="user__str">  { userFilter.id } </strong>
             </span>
        </div>
        <div className="user__user">
        <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'block',
          width: '1px',
          left: '500px',
          top: '-24px',
          bottom: '-24px',
        }}
      />
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          // make the card resizable for demo
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img
            src={us}
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            { userFilter.name } { userFilter.lastName }
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            { userFilter.profession }
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Articles Publier
              </Typography>
              <Typography fontWeight="lg">34</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Followers
              </Typography>
              <Typography fontWeight="lg">{userFilter.like}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Faculte
              </Typography>
              <Typography fontWeight="lg">{ userFilter.faculty }</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Age
              </Typography>
              <Typography fontWeight="lg"> { userFilter.age } </Typography>
            </div>
          </Sheet>
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Chat
            </Button>
            <Button 
             onClick={() => follow(userFilter.id)}
             variant="solid" color="primary">
              Follow
            </Button>
            </Box>
            </CardContent>
        </Card>
        </Box>
        <div className="user__bottom">
             <h2 className="user__notes">Articles publier</h2>
              <div className="user__list">
              {userFilter.notes.map(noteId => (
                    <Button variant="outlined" className="user__item" key={noteId.id}>
                        <AdsClickIcon />
                        <span className="user__span">{noteId.title}</span> {/* Assurez-vous que 'note' contient les propriétés que vous souhaitez afficher */}
                    </Button>
                ))}
              </div>
        </div>
        </div>
    </div>
  )
}

export default User