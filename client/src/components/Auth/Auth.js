import { Avatar, Container, Paper } from '@material-ui/core'
import { Button, Grid, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Input from './Input';
import { signup,signin } from '../../actions/Auth.js';
import {GoogleLogin} from 'react-google-login'
import Icon from './Icon'
import useStyles from './style'
import React, { useState } from 'react'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

function Auth() {

    const [signUp, setSignUp] = useState(false)
    const [formData,setFormData] = useState(initialState)
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const [showPassword, setShowPassword] = useState(false);
    const handleshowpassword = () => setShowPassword((prev) => !prev)

    const switchMode = () => {
        setSignUp((prev) => !prev)
        setShowPassword(false)

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if(signUp){
            dispatch(signup(formData,history))
        }else{
            dispatch(signin(formData,history))
        }

        // console.log(formData);
    }
    const handleChng = (e) => {
        e.preventDefault()
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const onSuccess =async (res) => {
      const result = res?.profileObj // option chaining oprator , wont get error if data is not there instead get undefined
      const token = res?.tokenId
    //   console.log(token);
    //   console.log(result);

      try{
            dispatch({type:'AUTH',data:{result,token}})
            history.push('/')
      }catch(err){
          console.log(err);
      }
    }
    const onFailure = () => {
        console.log("Login unsuccessfully");
    }
    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>{signUp ? 'SignUp' : 'SignIn'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {signUp && (
                            <>
                                <Input  name="firstName" label="First Name" handleChng={handleChng} autoFocus half />
                                <Input  name="lastName" label="Last Name" handleChng={handleChng} half />
                            </>
                        )}
                        <Input  name="email" label="Email Address" handleChng={handleChng} type="email" />
                        <Input name="password" label="Password" handleChng={handleChng} type={showPassword ? 'text' : 'password'} handleshowpassword={handleshowpassword} />
                        {signUp && <Input name="confirmPassword" label="Repeat Password" handleChng={handleChng} type="password" />}
                    </Grid>
                    <Button className={classes.submit} type='submit' variant='contained' fullWidth>
                        {signUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId='1083978059858-s0eqlvb6eh9kiprtp4gpj2s5edigpa7t.apps.googleusercontent.com'
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        render={(renderProp) => (
                            <Button
                                color='primary'
                                className={classes.googleButton} 
                                onClick={renderProp.onClick} 
                                fullWidth
                                startIcon={<Icon />}
                                disabled={renderProp.disabled}
                            >
                                Google SignIn
                            </Button>
                        )}
                    />
                    <Grid container justify='center'>
                        <Grid item>
                            <Button onClick={switchMode} variant='contained' fullWidth>
                                {signUp ? 'Already have an account ? SignUp' : "Dont have an account SignIn"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
