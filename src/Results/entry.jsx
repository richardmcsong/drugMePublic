import React from 'react';
import styles from './styles.scss'



var Result = React.createClass({
    render(){
        var name = _.get(this.props, 'drug.name');
        var id = _.get(this.props, 'drug.id');
        var confidence = _.get(this.props, 'drug.confidence');
        var reasons = _.get(this.props, 'drug.reasons');

        var color = this.props.color.slice();

        color[2] = (40 + 5 * +this.props.index) + '%';
        color[1] = (40 + 6 * +this.props.index) + '%';

        color = 'hsl(' + color.join(',') + ')';

        return (
            <div>
                <h4>{ name }</h4>
                <div
                    className={ styles.conf }
                    style={{
                        width: (100 * confidence) + '%',
                        backgroundColor: color
                    }}>
                </div>
                <div
                    className={ styles.conf }
                    style={{
                        width: (100 - 100 * confidence) + '%',
                        backgroundColor: '#eee'
                    }}>
                </div>
            </div>
        )
    }
})


var Results = React.createClass({
    render(){
        var color = [Math.random() * 360, 0, 0];

        return (
            <div className={ styles.results }>
                { _.map(_.get(this.props, 'diagnosis'), (drug, index) =>
                    <Result
                        drug={ drug }
                        index={ index }
                        color={ color }>
                    </Result>) }
            </div>
        )
    }
})


export default Results;
