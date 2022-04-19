import React, { useState } from 'react'
import { AppBar, Typography } from '@material-ui/core'
import useStyles from './styles';
import memories from '../../images/memories.png';
import { Toolbar, Avatar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';

function NavBar() {
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const dispatch = useDispatch()
    const history = useHistory()

    const logOut = () => {
        dispatch({type:'LOGOUT'})
        history.push("/auth")
        setUser(null)
    }
    return (
        <div>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.div}>
                    <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                    <img className={classes.image} src={memories} alt="icon" height="60" />
                </div>
                <Toolbar className={classes.toolbar}>
                    {user?.result?(
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt='' src={user.imageUrl}/>
                            <Typography className={classes.userName} variant="h6">{user.username}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logOut}>Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
