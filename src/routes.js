import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//screens
import Alphabetic from '../src/screens/Alphabetic';
import Home from '../src/screens/Home';
import Sale from '../src/screens/Sale';
import Score from '../src/screens/Score';



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sale"  component={Sale} />
                <Route path="/score" component={Score} />
                <Route path="/alphabetic" component={Alphabetic} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;