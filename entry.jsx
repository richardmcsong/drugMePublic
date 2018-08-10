import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router';
import Dashboard from './src/Dashboard/entry.jsx';
import Container from './src/Container/entry.jsx';
import Patient from './src/Patient/entry.jsx';

import './main.scss'

var App = React.createClass({
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={ Container }>
                    <Route path='/dashboard' component={ Dashboard }></Route>
                    <Route path='/patient/:id' component={ Patient }></Route>
                    <IndexRedirect to='/dashboard'></IndexRedirect>
                </Route>
            </Router>
        )
    }
})

document.addEventListener('DOMContentLoaded', (event) =>
    ReactDOM.render(<App />, document.getElementById('react-entry'))
);
