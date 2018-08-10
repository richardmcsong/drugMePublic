import React from 'react';
import styles from './styles.scss';

var Navbar = React.createClass({
    contextTypes: {router: React.PropTypes.object},
    render(){
        return (
            <h1 style={{marginBottom: 30, cursor: 'pointer'}} onClick={() => this.context.router.push('/dashboard')}>DrugME</h1>
        )
    }
})

export default Navbar;
