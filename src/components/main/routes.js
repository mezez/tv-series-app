import React from 'react';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import Series from '../../containers/series';
import SingleSeries from '../../containers/singleSeries';

const Main = props => (
    <Router>
        <div>
        <Switch>
            <Route exact path='/' component={Series} />
            <Route path='/series/:id' component={SingleSeries} />
        </Switch>
        </div>
    </Router>
);

export default Main;