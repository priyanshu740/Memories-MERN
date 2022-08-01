import React from 'react'
import {Container} from '@material-ui/core'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

const App = () => {


  return (

    <Router>
    <Container maxWidth="lg">
      <NavBar/>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/auth' component={Auth} />
        <Route path="/search" exact component={Home} />
       </Switch>
    </Container>
    </Router>
  );
};

export default App;
