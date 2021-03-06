import OTPInput from "otp-input-react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SendRounded } from "@material-ui/icons"
import LoadingButton from '@mui/lab/LoadingButton'
import { Loading } from 'react-loading-dot'
import { Alert } from '@material-ui/lab/'
import { Snackbar } from "@mui/material";
import './SignUpOtp.css'
import otpTheme from '../Logo/OtpImage.svg'
import useForm from "./useForm";


const useStyles = makeStyles(theme => ({
    grid: {
        backgroundColor: "grey",
        height: "50vh",
        textAlign: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'rgb(14, 104, 200) !important'
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    container: {
        marginTop: theme.spacing(20),
    }
}));



export default function SignUpOtp(person) {

    const { handleClick, handleDoctorClick, handleSubmit, handleDoctorSubmit, authSuccess, setAuthSuccess, otpError, OTP, setOTP, loading, seconds, sendOtpSuccess, verifyLoading } = useForm(person)

    const classes = useStyles();

    return (
        <Container maxWidth='lg' className="container">
            <Grid container spacing={3}>

                <Grid item xs={12} sm={6} md={6} className='firstGrid'>
                    <img className='themeImage' src={otpTheme} alt="" />
                </Grid>

                <Grid item xs={12} sm={6} md={6} className='secondGrid'>

                    {
                        authSuccess && (
                            <Snackbar open={authSuccess} autoHideDuration={1500} >
                                <Alert onClose={setAuthSuccess(false)} severity="success" sx={{ width: '100%' }}>
                                    Verified Successfully
                                </Alert>
                            </Snackbar>)
                    }

                    <CssBaseline />
                    <div className={classes.paper}>
                        <Grid
                            container
                            style={{ backgroundColor: "white" }}
                            className={classes.grid}
                            justify="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <Grid item container justify="center">
                                <Grid item container alignItems="center" direction="column">
                                    <Grid item>
                                        <Avatar className={classes.avatar}>
                                            <LockOutlinedIcon />
                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Typography component="h1" variant="h5">
                                            Verification Code
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} justify="center">
                                <Paper elevation={0}>
                                    <Typography variant="h6">
                                        Please enter the verification code sent to your Email
                                    </Typography>
                                </Paper>
                            </Grid>
                            {otpError &&
                                <Grid>
                                    <Alert severity="error">
                                        <strong>{otpError}</strong>
                                    </Alert>
                                </Grid>
                            }
                            {sendOtpSuccess &&
                                <Grid>
                                    <Alert severity="success">
                                        <strong>{sendOtpSuccess}</strong>
                                    </Alert>
                                </Grid>
                            }
                            <Grid item xs={12} container justify="center" alignItems="center" direction="column" >
                                <Grid item container spacing={3} justify="center">
                                    <OTPInput className="otpInput" value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} shouldAutoFocus={true} />
                                </Grid>


                                <Grid>
                                    {
                                        !verifyLoading &&
                                        <LoadingButton
                                            onClick={(e) => {
                                                person === 'user' ? handleClick() : handleDoctorClick()
                                            }}
                                            endIcon={<SendRounded />}
                                            loading={loading}
                                            loadingPosition="end"
                                            variant="contained"
                                            style={{ float: "right", marginTop: "25px", backgroundColor: "#00C9B5" }}
                                        >
                                            {loading ? `Resend OTP in : ${seconds}` : "Resend OTP"}
                                        </LoadingButton>
                                    }
                                </Grid>

                                {/* Verify Button */}
                                <Grid container item justify="center">
                                    {
                                        verifyLoading ?
                                            <Loading dots={4} background='#389df5' margin='0.5rem' /> :
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                                style={{ backgroundColor: '#6BB8FF' }}
                                                onClick={() => {
                                                    person === 'user' ? handleSubmit() : handleDoctorSubmit()
                                                }}
                                            >
                                                Verify
                                            </Button>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>


                </Grid>
            </Grid>
        </Container>
    );
}

