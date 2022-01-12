import React, { useState, useContext } from "react";
import "../../assets/css/loader.css";
import { AuthContext } from "../../context";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useMutation, gql } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  topDiv: {
    marginTop: "100px",
  },
  paper: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: "10px",
    backgroundColor: "pink",
  },
  form: {
    width: "100%",
    marginTop: "20px",
  },
  submit: {
    margin: "20px 0px 20px",
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      // console.log(data);
      context.login(data.login);
      props.history.push("/admin");
    },

    variables: {
      email: values.email,
      password: values.password,
    },

    onError: (err) => {
      if (err && err.graphQLErrors) {
        // console.log(err.graphQLErrors[0].extensions.exception.errors);
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      }
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div className={classes.topDiv}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>

          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/register" variant="body2">
                  New user? Sign up
                </Link>
              </Grid>
            </Grid>
          </form>
          {/* <div>
            {Object.keys(errors).length > 0 &&
              Object.values(errors).map((err) => {
                {
                  console.log(err);
                }
                <p key={err}>{err}</p>;
              })}
          </div> */}
        </div>
      </Container>
    </div>
  );
}

const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      username
      created
      token
    }
  }
`;
