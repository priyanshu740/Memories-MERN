import { Container, Grow, Grid, AppBar, Button,TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import {useHistory,useLocation} from 'react-router-dom'
import { getPosts, searchPost } from '../../actions/posts';
import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';
import usestyles from './styles'



function Home() {
    const [currentId, setCurrentId] = useState(0);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const classes = usestyles()
    const history = useHistory()

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);  

    const searchpost = () => {
        if(search.trim()){
            dispatch(searchPost({search}))
            history.push(`/search?searchQuery=${search}`)
        } else{
            history.push('/')
        }
    }

    return (
        <div>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <AppBar className={classes.AppBar} position="static" color="inherit">
                                <TextField 
                                    name="search"
                                    label="Search Memories"  
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    fullWidth
                                    varient='outlined'
                                />
                                <Button fullWidth className={classes.button} onClick={searchpost} color='primary'> Search</Button>
                            </AppBar>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </div>
    )
}

export default Home


