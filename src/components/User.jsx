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


const User = ( { user } ) => {
  return (
    <div className="user">
        <div className="user__container">
             <h1 className="user__title">Information sur l'etudiant </h1>
             <span className="user__id">ID Etudiant : 
                <strong className="user__str"> { user.id }</strong>
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
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            { user.name } { user.lastName }
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            { user.profession }
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
              <Typography fontWeight="lg">980</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Faculte
              </Typography>
              <Typography fontWeight="lg">{ user.faculty }</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Age
              </Typography>
              <Typography fontWeight="lg"> { user.age } </Typography>
            </div>
          </Sheet>
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Chat
            </Button>
            <Button variant="solid" color="primary">
              Follow
                </Button>
            </Box>
            </CardContent>
        </Card>
        </Box>
        <div className="user__bottom">
             <h2 className="user__notes">Articles publier</h2>
              <div className="user__list">
                  <Buttons variant="outlined" className="user__item">
                      <AdsClickIcon /> 
                      <span className="user__span">Le royaume a ete donnee a Irius fils d'Iren</span>
                  </Buttons>
                  <Buttons variant="outlined" className="user__item">
                      <AdsClickIcon /> 
                      <span className="user__span">Le royaume a ete donnee a Irius fils d'Iren</span>
                  </Buttons>
                  <Buttons variant="outlined" className="user__item">
                      <AdsClickIcon /> 
                      <span className="user__span">Le royaume a ete donnee a Irius fils d'Iren</span>
                  </Buttons>
                  <Buttons variant="contained" className="user__item">
                      <AdsClickIcon /> 
                      <span className="user__span">Le royaume a ete donnee a Irius fils d'Iren</span>
                  </Buttons>
              </div>
        </div>
        </div>
    </div>
  )
}

export default User