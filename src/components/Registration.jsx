import { Button, Link, Paper, TextField, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { useDispatch } from 'react-redux';
import { addNewUserFireBaseCloud, openCloseRegistration } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
  const [email, setEmail] = useState('');
  const [name, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
const dispatch= useDispatch()
const navigate = useNavigate();
  const handleSubmit = async(e) => {
  


    e.preventDefault();
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth,email, password).then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
       
          const payload={name:name,email:email,phoneNumber:phoneNumber}
 
          dispatch(addNewUserFireBaseCloud(payload,navigate))

        
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Paper
        elevation={6}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.774)',
          height: '50vh',
          padding: '2em',
          width: '20vw',
          margin: '2rem',
        }}
      >
        <TextField
         size="small"
          id="outlined-basic"
          label="Email ID"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            marginTop: '1em',
            width: '80%',
          }}
        />
        <br />
        <TextField
         size="small"
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          value={name}
          onChange={(e) => setUserName(e.target.value)}
          sx={{
            marginTop: '1em',
            width: '80%',
          }}
        />
        <br />
        <TextField
         size="small"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          sx={{
            marginTop: '1em',
            width: '80%',
          }}
          InputProps={{
            endAdornment: (
              <IconButton
                edge="end"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
        {/* <br />
        <TextField
         size="small"
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' ,maxLength: 10}}
          sx={{
            marginTop: '1em',
            width: '80%',
          }}
        />
        <br />
        <TextField
         size="small"
          id="outlined-basic"
          label="Enter OTP"
          variant="outlined"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          sx={{
            marginTop: '1em',
            width: '80%',
          }}
        /> */}
        <br />
        <Button
         size="small"
          variant="contained"
          onClick={handleSubmit}
          sx={{
            marginTop: '1em',
            width: '80%',
          }}
        >
          Submit
        </Button>
        <br />
        <br />
        <Link
          component="button"
          variant="body2"
          sx={{
            marginTop: '1em',
            width: '80%',
            marginLeft: 12,
          }}
          onClick={()=>dispatch(openCloseRegistration(false))}
        >
          already have an account?
        </Link>
      </Paper>
    </>
  );
};