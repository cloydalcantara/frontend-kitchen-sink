import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from '../pages/adminpage';
import LandingPage from '../pages/landingpage'
import PublicRoute from '../libs/PublicRoute'

const App = () => {

  return (
        <Switch>
            <Route>
                <Switch>
                    <PublicRoute path='/' exact component={LandingPage} />
                    <PublicRoute path='/admin' component={Admin} />
                </Switch>
            </Route>
        </Switch>
  );
};

export default App;