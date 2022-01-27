import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '80%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    container: {
        marginTop: theme.spacing(10),
    },
}));

export default function SignUp() {
    const classes = useStyles();

    return (
        <Container component="main" className={classes.container} maxWidth="xs" >
            <CssBaseline />
            <div className={classes.paper} >
                <Avatar className={classes.avatar}>
                    
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="standard"
                                fullWidth
                                id="firstName"
                                inputProps={{ style: { fontSize: 12 } }}
                                InputLabelProps={{ style: { fontSize: 12 } }}
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="standard"
                                fullWidth
                                id="lastName"
                                inputProps={{ style: { fontSize: 12 } }}
                                InputLabelProps={{ style: { fontSize: 12 } }}
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                fullWidth
                                id="email"
                                inputProps={{ style: { fontSize: 12 } }}
                                InputLabelProps={{ style: { fontSize: 12 } }}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                fullWidth
                                id="phone"
                                inputProps={{ style: { fontSize: 12 } }}
                                InputLabelProps={{ style: { fontSize: 12 } }}
                                label="Phone Number"
                                type="tel"
                                name="phone"
                                autoComplete="phone"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                fullWidth
                                inputProps={{ style: { fontSize: 12 } }}
                                InputLabelProps={{ style: { fontSize: 12 } }}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                fullWidth
                                inputProps={{ style: { fontSize: 12 } }}
                                InputLabelProps={{ style: { fontSize: 12 } }}
                                name="confirmpassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={{ backgroundColor: '#00C9B5', color: '#fff' }}
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}