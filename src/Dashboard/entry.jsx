import React from 'react';
import styles from './styles.scss';
import firebase from '../firebase.jsx';
import _ from 'lodash';
import PatientListing from '../PatientListing/entry.jsx';
import FA from 'react-fontawesome';
import { connect } from 'react-redux'

var Dashboard = React.createClass({
    render(){
        return (
            <div className={ styles.dashboard }>
                { _.map(this.props.patients, data => <PatientListing data={ data } />) }
            </div>
        )
    }
})

function mapStateToProps(state){
    return {patients: state}
}

export default connect(mapStateToProps)(Dashboard);
