import { Button, Link, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebaseConfig";
import {
  addNewUserFireBaseCloud,
  getUsersData,
  openCloseRegistration,
} from "../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            // Signed in
            const user = userCredential.user;

            dispatch(getUsersData(null));

            // ...
          }
        );
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, " ");
    if (numericValue.length <= 10) {
      setPhoneNumber(numericValue);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(getUsersData(null));
        const payload = {
          name: user.displayName,
          email: user.email,
          phoneNumber: phoneNumber,
        };
        dispatch(addNewUserFireBaseCloud(payload, navigate));
        // ...
      });

      // const payload={name:name,email:email,phoneNumber:phoneNumber}
      // dispatch(addNewUserFireBaseCloud\(payload,navigate))
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Paper
      elevation={6}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.774)",
        height: "50vh",
        padding: "2em",
        width: "20vw",
        margin: "2rem",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            marginTop: "1em",
            width: "80%",
          }}
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            marginTop: "1em",
            width: "80%",
          }}
        />
        <br />
        <Button
          variant="contained"
          type="submit"
          sx={{
            marginTop: "1em",
            width: "80%",
          }}
        >
          Login
        </Button>
      </form>
      <br />
      <Button
        variant="outlined"
        sx={{
          marginTop: "1em",
          width: "80%",
        }}
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </Button>

      <br />
      <br />
      <Link
        component="button"
        variant="body2"
        sx={{
          marginTop: "1em",
          width: "80%",
          marginLeft: 12,
        }}
        onClick={() => dispatch(openCloseRegistration(true))}
      >
        Create a account?
      </Link>
    </Paper>
  );
};
