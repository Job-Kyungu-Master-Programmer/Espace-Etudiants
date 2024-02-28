import React, { useState } from "react";
import { TextField, Button, Alert } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = ({ addLogin, mail, setMail, password, setPassword,warning }) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div className="login">
            <div className="login__container">
                <div className="login__image"></div>
                <form onSubmit={addLogin} 
                className="login__form">
                    {warning &&
                       <Alert variant="filled" severity="warning">
                           {warning}
                       </Alert>
                    }
                    <h1 className="login__title">Connexion</h1>
                    <TextField className='notes__input'
                    id="outlined-basic"
                     value={mail}
                     onChange={(e) => setMail(e.target.value)}
                     label="Votre E-mail" variant="outlined" />
                     <FormControl  variant="outlined">
                    <InputLabel
                     htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    </FormControl>
                    <Button type='submit'
                    className='notes__send login__send'
                    variant="contained">
                        Connectez-vous
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login