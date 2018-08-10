import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import styles from './styles.scss';

var PatientListing = React.createClass({

    render(){
        var name = _.get(this.props, 'data.personal.name');
        var age = _.get(this.props, 'data.personal.age');
        var date_of_birth = _.get(this.props, 'data.personal.date_of_birth');
        var gender = _.get(this.props, 'data.personal.sex');
        var phone_number = _.get(this.props, 'data.personal.phone_number');
        var email = _.get(this.props, 'data.personal.email');
        var id = _.get(this.props, 'data.id');

        return (
            <Link className={ styles.patientlisting } to={ `/patient/${id}` }>
                <div className={ styles.block30 }>
                    <img src='http://placehold.it/350x150' />
                </div>
                <div className={ styles.block70 }>
                    <h1>{ name }</h1>
                    <h3>DOB: {date_of_birth} ({ age }yr), {gender == 'M' ? 'Male' : 'Female'}</h3>
                    <p>{ phone_number }</p>
                    <p>{ email }</p>
                </div>
            </Link>

        )
    }
});


export default (PatientListing);
