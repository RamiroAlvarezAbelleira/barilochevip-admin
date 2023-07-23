import { Avatar, Box, Button, Card, Container, TextField} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { useLogin, useNotify, Notification } from "react-admin";
import "./login.css"


const CustomLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailInputError, setEmailInputError] = useState({
    error: false,
    errorMessage: "",
  });
  const [passwInputError, setPasswInputError] = useState({
    error: false,
    errorMessage: "",
  });

  const login = useLogin();
  const notify = useNotify();


  const passwIsValid = () => {
    if (password.length >= 8) {
      setPasswInputError({
        error: false,
        errorMessage: "",
      });
      return true;
    } else if (password.length < 8) {
      setPasswInputError({
        error: true,
        errorMessage: "You must provide a valid password",
      });
      return false;
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const passwIsOk = passwIsValid();
    if (passwIsOk) {
      login({ email, password }).catch((error) => {
        if (error) {
          notify(`Invalid email or password ${error.message}`, { type: "error" })
        } 
      }
      );
    }
  };

  return (
    <div className='login-main'>
      <Card className='login-card'>
        <Box component="form" className='form-box' onSubmit={submit}>
          <Container className='from-avatar-container'>
            <Avatar className='from-avatar'>BV</Avatar>
          </Container>
          <TextField
            name="email"
            placeholder="Email"
            className='form-input'
            error={emailInputError.error}
            helperText={emailInputError.errorMessage}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailInputError({
                error: false,
                errorMessage: "",
              });
            }}
          />
          <br />
          <TextField
            name="password"
            type="password"
            placeholder="Password"
            className='form-input'
            error={passwInputError.error}
            helperText={passwInputError.errorMessage}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswInputError({
                error: false,
                errorMessage: "",
              });
            }}
          />
          <Button
            fullWidth={false}
            variant="contained"
            color="primary"
            size="medium"
            type="submit"
            className='form-button'
          >
            SIGN IN
          </Button>
        </Box>
      </Card>
      <Notification />
    </div>
  );
};

export default CustomLogin;