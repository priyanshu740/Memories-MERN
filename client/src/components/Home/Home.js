import { Container, Grow, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';



function Home() {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

        useEffect(() => {
                dispatch(getPosts());
        }, [currentId, dispatch]);
    return (
        <div>
  
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </div>
    )
}

export default Home


