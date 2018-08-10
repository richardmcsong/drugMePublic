import React from 'react';
import Navbar from '../Navbar/entry.jsx';
import { Provider } from 'react-redux';
import store from "../store.jsx";

var Container = React.createClass({
    render(){
        return (
            <Provider store={store}>
                <div>
                    <Navbar />
                    { this.props.children }
                </div>
            </Provider>
        )
    }
})

export default Container;
